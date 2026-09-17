import type { Dictionary } from '../types';

export const products: Dictionary['products'] = {
  metaTitle: 'Products — AL-MAWJAAT AL-FIDYA',
  metaDescription: 'Browse the full AL-MAWJAAT AL-FIDYA catalog of medical equipment, medical furniture, and medical supplies.',
  title: 'Our Products',
  subtitle: 'Search or filter our full catalog of medical equipment, furniture, and supplies.',
  searchPlaceholder: 'Search products…',
  searchLabel: 'Search products',
  resultsCount: (count) => `${count} ${count === 1 ? 'product' : 'products'}`,
  emptyTitle: 'No products found',
  emptyBody: 'Try a different search term or category filter.',
  emptyReset: 'Reset filters',
};
