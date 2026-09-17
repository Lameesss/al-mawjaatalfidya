import type { Lang } from '@/i18n';

export function buildPath(lang: Lang, ...segments: string[]): string {
  const cleaned = segments.filter(Boolean).join('/');
  return cleaned ? `/${lang}/${cleaned}` : `/${lang}`;
}

export function productPath(lang: Lang, slug: string): string {
  return buildPath(lang, 'products', slug);
}

export function categoryPath(lang: Lang, slug: string): string {
  return buildPath(lang, 'categories', slug);
}

// Returns the equivalent path in `targetLang` for any path produced by this
// app (root "/", "/en/...", or "/ar/..."), preserving the rest of the route
// so switching language never bounces the user back to the homepage.
export function swapLang(pathname: string, targetLang: Lang): string {
  if (pathname === '/') {
    return targetLang === 'en' ? '/' : `/${targetLang}`;
  }

  const match = pathname.match(/^\/(en|ar)(\/.*)?$/);
  if (match) {
    const rest = match[2] ?? '';
    return `/${targetLang}${rest}`;
  }

  return `/${targetLang}`;
}
