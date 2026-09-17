// One-off dev script: crops the circular brand mark out of logo/logo.jpeg
// (which is a wide lockup with lots of white margin, the wordmark, and the
// tagline below the mark) and produces square favicon/apple-touch-icon PNGs.
// Not part of the app runtime — sharp stays a devDependency.
import sharp from 'sharp';
import path from 'node:path';

const SRC = path.resolve('public/logo/logo.jpeg');
const OUT_DIR = path.resolve('public');

async function main() {
  const trimmed = sharp(SRC).trim({ threshold: 10 });
  const buffer = await trimmed.toBuffer();
  const meta = await sharp(buffer).metadata();
  const w = meta.width;
  const h = meta.height;

  // The mark (circle) sits above the two-line wordmark/tagline; empirically
  // it occupies roughly the top 60% of the trimmed content's height.
  const markHeight = Math.round(h * 0.6);
  const size = Math.min(w, markHeight);
  const left = Math.round((w - size) / 2);

  const markBuffer = await sharp(buffer)
    .extract({ left, top: 0, width: size, height: size })
    .flatten({ background: '#ffffff' })
    .toBuffer();

  await sharp(markBuffer).resize(32, 32).png().toFile(path.join(OUT_DIR, 'favicon-32.png'));
  await sharp(markBuffer).resize(192, 192).png().toFile(path.join(OUT_DIR, 'favicon-192.png'));
  await sharp(markBuffer).resize(180, 180).png().toFile(path.join(OUT_DIR, 'apple-touch-icon.png'));
  await sharp(markBuffer).resize(512, 512).png().toFile(path.join(OUT_DIR, 'mark-preview.png'));

  console.log('Favicons written:', { trimmedSize: `${w}x${h}`, markCrop: `${size}x${size} @ left=${left}` });
}

main();
