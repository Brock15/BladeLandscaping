import fs from 'node:fs/promises';
import sharp from 'sharp';

const source = process.argv[2] || '/Users/brock/Downloads/lawnmowing.jpeg';
const destination = 'public/media/ready/lawn-maintenance.webp';

await fs.mkdir('public/media/ready', { recursive: true });
const result = await sharp(source)
  .rotate()
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 84 })
  .toFile(destination);

console.log(`Prepared ${destination}: ${result.width}×${result.height}, ${result.size} bytes. Original unchanged.`);
