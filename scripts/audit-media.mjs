import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const root = process.cwd();
const outputDirectory = path.join(root, '.local-preview/media-audit');
await fs.mkdir(outputDirectory, { recursive: true });
const videoHelper = path.join(outputDirectory, 'video-audit');
if (!process.argv.includes('--images-only')) execFileSync('clang', ['-w', '-framework', 'Foundation', '-framework', 'AVFoundation', '-framework', 'CoreMedia', '-framework', 'AppKit', 'scripts/video-audit.m', '-o', videoHelper]);
const files = [];
async function collect(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'optimized') await collect(filename);
    } else if (/\.(png|jpe?g|heic|svg|mp4|webp)$/i.test(entry.name)) files.push(filename);
  }
}
await collect(path.join(root, 'public'));
files.sort();
files.push(path.join(root, 'app/icon.png'), path.join(root, 'app/apple-icon.png'));
const inventory = [];
const thumbnails = [];
for (const [index, filename] of files.entries()) {
  const relative = path.relative(root, filename);
  const hash = crypto.createHash('sha256').update(await fs.readFile(filename)).digest('hex');
  const bytes = (await fs.stat(filename)).size;
  if (!bytes) {
    inventory.push({ index, path: relative, bytes, hash, status: 'empty — unusable' });
    continue;
  }
  if (/\.mp4$/i.test(filename) && process.argv.includes('--images-only')) {
    inventory.push({ index, path: relative, bytes, hash, status: 'video audit pending' });
    continue;
  }
  const directory = path.join(outputDirectory, String(index).padStart(2, '0'));
  await fs.mkdir(directory, { recursive: true });
  let sources = [filename];
  let video = null;
  if (/\.mp4$/i.test(filename)) {
    video = JSON.parse(execFileSync(videoHelper, [filename, directory], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }));
    sources = video.frames;
  } else if (/\.heic$/i.test(filename)) {
    const converted = path.join(directory, 'converted.jpg');
    execFileSync('sips', ['-s', 'format', 'jpeg', filename, '--out', converted], { stdio: 'ignore' });
    sources = [converted];
  }
  let metadata = {};
  if (sources.length) {
    try {
      metadata = await sharp(sources[0]).metadata();
    } catch {
      const converted = path.join(directory, 'compatible.jpg');
      try {
        execFileSync('sips', ['-s', 'format', 'jpeg', sources[0], '--out', converted], { stdio: 'ignore' });
        metadata = await sharp(converted).metadata();
        sources = [converted];
      } catch {
        inventory.push({ index, path: relative, bytes, hash, status: 'unreadable — unusable' });
        continue;
      }
    }
  }
  inventory.push({ index, path: relative, bytes: (await fs.stat(filename)).size, hash, width: metadata.width, height: metadata.height, duration: video?.duration, frames: sources });
  for (const [frameIndex, source] of sources.entries()) {
    const thumbnail = await sharp(source).resize(260, 180, { fit: 'contain', background: '#e5e5df' }).flatten({ background: '#e5e5df' }).jpeg().toBuffer();
    thumbnails.push({ thumbnail, label: `${index} ${path.basename(filename).slice(0, 32)}${video ? ` [${frameIndex + 1}/3]` : ''}` });
  }
}
const escapeXML = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
for (let offset = 0; offset < thumbnails.length; offset += 20) {
  const batch = thumbnails.slice(offset, offset + 20);
  const layers = [];
  batch.forEach((item, index) => {
    const left = index % 4 * 280 + 10;
    const top = Math.floor(index / 4) * 220 + 10;
    layers.push({ input: item.thumbnail, left, top });
    layers.push({ input: Buffer.from(`<svg width="270" height="30"><text x="2" y="18" font-size="11" font-family="Arial" fill="#111">${escapeXML(item.label)}</text></svg>`), left, top: top + 182 });
  });
  await sharp({ create: { width: 1120, height: Math.ceil(batch.length / 4) * 220, channels: 3, background: '#faf9f5' } }).composite(layers).jpeg({ quality: 85 }).toFile(path.join(outputDirectory, `sheet-${Math.floor(offset / 20) + 1}.jpg`));
}
await fs.writeFile(path.join(outputDirectory, 'inventory.json'), JSON.stringify(inventory, null, 2));
console.log(`Audited ${inventory.length} assets; ${thumbnails.length} views across ${Math.ceil(thumbnails.length / 20)} sheets in ${outputDirectory}`);
