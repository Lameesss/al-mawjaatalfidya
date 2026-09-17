// Product categories mirror the three real catalog sections.
// `image` is a representative product photo used on the home category cards.
export type CategoryId = 'equipment' | 'furniture' | 'supplies';
export type CategoryTone = 'primary' | 'teal';

export interface Category {
  id: CategoryId;
  icon: string;
  tone: CategoryTone;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'equipment',
    icon: 'Activity',
    tone: 'primary',
    image: '/products/1712000196.png',
  },
  {
    id: 'furniture',
    icon: 'BedDouble',
    tone: 'teal',
    image: '/products/1712023125.png',
  },
  {
    id: 'supplies',
    icon: 'Syringe',
    tone: 'primary',
    image: '/products/1712198593.png',
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

// Filter tabs used on the Products catalog page.
export const productFilters: Array<'all' | CategoryId> = ['all', 'equipment', 'furniture', 'supplies'];
