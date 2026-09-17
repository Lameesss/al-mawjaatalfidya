// Postbuild: emits dist/sitemap.xml (with en/ar hreflang alternates) and
// public/robots.txt referencing it. Reuses the same route list vite-react-ssg
// prerendered, so the sitemap can never drift from the actual static pages.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { getRoutePairs } from '../src/utils/prerenderRoutes';

const SITE_URL = process.env.VITE_SITE_URL ?? '';

function main() {
  const pairs = getRoutePairs();

  const urlEntries = [{ en: '/', ar: '/ar' }, ...pairs]
    .map(({ en, ar }) => {
      return `  <url>
    <loc>${SITE_URL}${en}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${en}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}${ar}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

  const distDir = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..', 'dist');
  writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf-8');

  console.log(`[sitemap] wrote ${pairs.length * 2 + 1} URLs to dist/sitemap.xml`);
}

main();
