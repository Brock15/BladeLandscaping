import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDirectory = '/Users/brock/Desktop/Ready photos';
const outputDirectory = 'public/media/ready';
const selections = [
  ['flagstone-on-a-covered-pad-east-texas-01.webp', 'covered-stone-patio', 1400],
  ['flagstone-path-along-a-white-house-east-texas-01.webp', 'flagstone-walkway', 1520],
  ['flagstone-patio-at-the-back-door-east-texas-01.webp', 'back-door-patio', 1400],
  ['flagstone-patio-extension-kilgore-tx-02.webp', 'patio-extension', 1400],
  ['314dc699-c7f0-42b3-8677-de8a8a28a51b.webp', 'site-access', 1200],
  ['5fdafc89-a1b4-4a2b-83d0-e40b7fa76404.webp', 'soil-preparation', 1200],
  ['68b02743-d8f9-4445-a94f-a80d7c07c81b.webp', 'stone-fitting', 1200],
  ['abf6d132-6333-4e64-87bb-96baf9ba5a65.webp', 'flagstone-patio', 1400],
  ['ed6977ae-36f8-4cd1-ab4e-83e76a85f2dc.webp', 'planting-at-work', 1200],
  ['exec-0d61281c-9932-41db-a128-113c418cb140-1.png', 'service-patios', 1280],
  ['exec-1eec9102-e1c0-4f0d-aed3-31a9eb757293-1.png', 'service-stone', 1280],
  ['exec-70153835-5c22-4cc2-838d-a8879cc81de7.png', 'service-sod', 1280],
  ['f569b537-adbb-467f-a532-8ce4d83a562a.webp', 'stone-joints', 1200],
  ['watermarked_img_14400212516403039300.webp', 'patio-installation', 1200],
  ['watermarked_img_16045504483385664074.webp', 'patio-in-progress', 1200],
  ['watermarked_img_2155751824318798612.webp', 'gravel-preparation', 1200],
  ['watermarked_img_9891980850071744301.webp', 'landscape-preparation', 1200],
];
await fs.mkdir(outputDirectory, { recursive: true });
const outputs = [];
for (const [source, name, width] of selections) {
  let pipeline = sharp(path.join(sourceDirectory, source)).rotate();
  if (name === 'flagstone-patio') pipeline = pipeline.modulate({ brightness: 1.035 });
  const output = await pipeline.resize({ width, withoutEnlargement: true }).sharpen({ sigma: 0.35 }).webp({ quality: 85 }).toFile(path.join(outputDirectory, `${name}.webp`));
  outputs.push({ source, output: `${outputDirectory}/${name}.webp`, width: output.width, height: output.height, bytes: output.size, treatment: name === 'flagstone-patio' ? '3.5% exposure lift; light sharpening; WebP' : 'light output sharpening; responsive WebP' });
}
for (const [source, name] of [['.local-preview/media-audit/27/frame-1.jpg', 'video-surface-preparation'], ['.local-preview/media-audit/43/frame-1.jpg', 'video-soil-preparation']]) {
  await sharp(source).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(outputDirectory, `${name}.webp`));
}
await fs.writeFile('.local-preview/ready-media/processed.json', JSON.stringify(outputs, null, 2));
const renovationSource = sharp('.local-preview/new-video-audit/23/frame-1.jpg').rotate();
const renovationWidth = Math.min(1200, (await renovationSource.metadata()).width);
await renovationSource.resize({ width: renovationWidth, height: Math.round(renovationWidth * 3 / 4), fit: 'cover', position: 'centre' }).webp({ quality: 85 }).toFile(path.join(outputDirectory, 'front-yard-renovation.webp'));
console.log(`Prepared ${outputs.length} separate copies; originals unchanged.`);
