import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const directory = process.argv[2] || '/Users/brock/Desktop/Ready photos';
const output = '.local-preview/ready-media';
await fs.mkdir(output, { recursive: true });
const files = (await fs.readdir(directory)).filter((file) => /\.(webp|png|jpe?g)$/i.test(file)).sort();
const inventory = [];
const composites = [];
const escapeXML = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
for (const [index, name] of files.entries()) {
  const filename = path.join(directory, name);
  const buffer = await fs.readFile(filename);
  const metadata = await sharp(buffer).metadata();
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  const duplicate = inventory.find((item) => item.hash === hash);
  inventory.push({ number: index + 1, name, path: filename, width: metadata.width, height: metadata.height, bytes: buffer.length, hash, duplicateOf: duplicate?.number });
  const left = index % 4 * 300 + 10;
  const top = Math.floor(index / 4) * 240 + 10;
  composites.push({ input: await sharp(buffer).rotate().resize(280, 190, { fit: 'contain', background: '#e6e8e2' }).jpeg({ quality: 85 }).toBuffer(), left, top });
  const label = `${index + 1}. ${name.slice(0, 35)}${duplicate ? ` (duplicate ${duplicate.number})` : ''}`;
  composites.push({ input: Buffer.from(`<svg width="290" height="35"><text x="2" y="18" font-family="Arial" font-size="10" fill="#18231c">${escapeXML(label)}</text></svg>`), left, top: top + 194 });
}
await sharp({ create: { width: 1200, height: Math.ceil(files.length / 4) * 240, channels: 3, background: '#fafaf6' } }).composite(composites).jpeg({ quality: 90 }).toFile(`${output}/contact-sheet.jpg`);
await fs.writeFile(`${output}/inventory.json`, JSON.stringify(inventory, null, 2));
console.log(JSON.stringify(inventory.map(({ number, name, width, height, duplicateOf }) => ({ number, name, width, height, duplicateOf })), null, 2));
