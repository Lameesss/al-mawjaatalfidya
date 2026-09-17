import type { Dictionary } from '../types';

export const category: Dictionary['category'] = {
  breadcrumbCategories: 'Categories',
  productsInCategory: (count) => `${count} ${count === 1 ? 'product' : 'products'} in this category`,
  relatedCategoriesTitle: 'Other Categories',
  ctaTitle: 'Need more information about a product in this category?',
  ctaButton: 'Contact Us',
  notFoundTitle: 'Category not found',
  notFoundBody: "The category you're looking for doesn't exist.",
  items: {
    equipment: {
      name: 'Medical Equipment',
      shortDescription: 'Diagnostic, surgical, and clinical devices for healthcare facilities.',
      intro:
        'Our medical equipment range covers ultrasound and X-ray systems, surgical lighting and tables, laboratory analyzers, and other diagnostic and clinical devices sourced for accurate, dependable performance.',
    },
    furniture: {
      name: 'Medical Furniture',
      shortDescription: 'Hospital beds, wheelchairs, trolleys, and clinical furniture.',
      intro:
        'Our medical furniture range includes hospital and examination beds, wheelchairs and mobility aids, treatment and instrument trolleys, and other furniture built for patient comfort and daily clinical use.',
    },
    supplies: {
      name: 'Medical Supplies',
      shortDescription: 'Bandages, PPE, disposables, and everyday clinical consumables — including mother & child care items.',
      intro:
        'Our medical supplies range covers bandages and dressings, protective equipment, disposables, first aid kits, and everyday clinical consumables, including mother & child care products.',
    },
  },
};
