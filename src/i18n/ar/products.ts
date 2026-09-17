import type { Dictionary } from '../types';

export const products: Dictionary['products'] = {
  metaTitle: 'المنتجات — الموجات الفدية',
  metaDescription: 'تصفح كتالوج الموجات الفدية الكامل للأجهزة والأثاث والمستلزمات الطبية.',
  title: 'منتجاتنا',
  subtitle: 'ابحث أو صفّ كتالوجنا الكامل للأجهزة والأثاث والمستلزمات الطبية.',
  searchPlaceholder: 'ابحث عن منتج…',
  searchLabel: 'البحث عن منتج',
  resultsCount: (count) => `${count} منتج`,
  emptyTitle: 'لم يتم العثور على منتجات',
  emptyBody: 'جرّب كلمة بحث مختلفة أو فئة أخرى.',
  emptyReset: 'إعادة ضبط الفلاتر',
};
