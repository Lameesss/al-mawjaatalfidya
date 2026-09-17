import { SUPPORTED_LANGS, type Lang } from '../i18n';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { buildPath, categoryPath, productPath } from './paths';

export interface RoutePair {
  en: string;
  ar: string;
}

// Single source of truth for every real page in the app, in both languages.
// Used both by vite-react-ssg (to know which routes to prerender) and by the
// sitemap generator (to emit hreflang alternates between the two languages).
export function getRoutePairs(): RoutePair[] {
  const pairs: RoutePair[] = [{ en: buildPath('en'), ar: buildPath('ar') }];

  for (const staticSegment of ['products', 'about', 'contact']) {
    pairs.push({ en: buildPath('en', staticSegment), ar: buildPath('ar', staticSegment) });
  }

  for (const category of categories) {
    pairs.push({ en: categoryPath('en', category.id), ar: categoryPath('ar', category.id) });
  }

  for (const product of products) {
    pairs.push({ en: productPath('en', product.id), ar: productPath('ar', product.id) });
  }

  return pairs;
}

export function getAllRoutes(): string[] {
  const routes = new Set<string>(['/']);
  for (const pair of getRoutePairs()) {
    for (const lang of SUPPORTED_LANGS as Lang[]) {
      routes.add(pair[lang]);
    }
  }
  return Array.from(routes);
}
