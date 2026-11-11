import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const execute = promisify(execFile);
const names = ['C4EEF8B5-25D3-4F39-80BC-0512491D0DCA.MOV', 'IMG_3812.mov', 'IMG_3922.mov', 'IMG_3933.mov', 'IMG_4072.MOV', 'IMG_4073.MOV', 'IMG_4107.MOV', 'IMG_0739.MOV', 'IMG_0766.mov', 'IMG_0767.MOV', 'IMG_0768.MOV', 'IMG_2425.MOV', 'IMG_2426 2.MOV', 'IMG_2426.MOV', 'IMG_2433.mov', 'IMG_6105.mov', 'IMG_2960.MOV', 'IMG_2961.MOV', 'IMG_2962.MOV', 'IMG_2964.MOV', 'IMG_2965.MOV', 'IMG_2966.MOV', 'IMG_2967.MOV'];
const outputDirectory = '.local-preview/new-video-audit';
await fs.mkdir(outputDirectory, { recursive: true });
const results = await Promise.all(names.map(async (name, index) => {
  const source = path.join('/Users/brock/Downloads', name);
  const destination = path.join(outputDirectory, String(index + 1));
  const result = await execute('.local-preview/media-audit/video-audit', [source, destination]);
  return { number: index + 1, name, source, hash: createHash('sha256').update(await fs.readFile(source)).digest('hex'), ...JSON.parse(result.stdout) };
}));
const composites = [];
for (const item of results) {
  for (const [index, frame] of item.frames.entries()) {
    const left = index * 320;
    const top = (item.number - 1) * 260;
    composites.push({ input: await sharp(frame).resize(320, 230, { fit: 'contain', background: '#e5e8e2' }).jpeg().toBuffer(), left, top });
    const label = `${item.number}. ${item.name.slice(0, 12)} · ${(item.duration * [0.12,0.5,0.86][index]).toFixed(1)}s / ${item.duration.toFixed(1)}s`;
    composites.push({ input: Buffer.from(`<svg width="320" height="30"><rect width="100%" height="100%" fill="white"/><text x="5" y="20" font-size="12">${label}</text></svg>`), left, top: top + 230 });
  }
}
await sharp({ create: { width: 960, height: results.length * 260, channels: 3, background: '#e5e8e2' } }).composite(composites).jpeg({ quality: 88 }).toFile(path.join(outputDirectory, 'contact-sheet.jpg'));
for (let offset = 0; offset < results.length; offset += 8) {
  const height = Math.min(8, results.length - offset) * 260;
  await sharp(path.join(outputDirectory, 'contact-sheet.jpg')).extract({left:0,top:offset*260,width:960,height}).jpeg({quality:88}).toFile(path.join(outputDirectory, `sheet-${Math.floor(offset/8)+1}.jpg`));
}
await fs.writeFile(path.join(outputDirectory, 'inventory.json'), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results.map(({ name, duration }) => ({ name, duration }))));
