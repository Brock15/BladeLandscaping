import fs from 'node:fs/promises';
import sharp from 'sharp';

await fs.mkdir('public/media/optimized', { recursive: true });
const selections = [
  ['.local-preview/media-audit/35/frame-1.jpg', 'landscape-hero', 1200],
  ['.local-preview/media-audit/41/frame-1.jpg', 'commercial', 1000],
  ['.local-preview/media-audit/42/frame-1.jpg', 'sod', 1000],
  ['.local-preview/media-audit/34/frame-1.jpg', 'preparation', 900],
  ['.local-preview/media-audit/33/frame-1.jpg', 'crew-work', 900],
  ['public/media/homepage/photos/plants copy.jpg', 'planting', 1000],
  ['public/reviews/fed-bread-2.png', 'stone-detail', 250],
  ['public/media/homepage/photos/owner-black-polo.png', 'owner-brock', 600],
  ['public/media/homepage/photos/owner-suit.jpeg', 'owner-jackson', 600],
  ['public/media/students/IMG_2963.png', 'crew-property', 800],
  ['public/media/students/IMG_9968.png', 'crew-materials', 414],
];
for (const [source, name, width] of selections) {
  const destination = `public/media/optimized/${name}.webp`;
  await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(destination);
}
console.log(`Prepared ${selections.length} optimized copies. Original media is unchanged.`);
