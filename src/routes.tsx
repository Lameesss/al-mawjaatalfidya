import type { RouteRecord } from 'vite-react-ssg';
import { LangLayout } from '@/components/layout/LangLayout';
import { RootHome } from '@/pages/RootHome';
import { Home } from '@/pages/Home';
import { ProductsCatalog } from '@/pages/ProductsCatalog';
import { ProductDetail } from '@/pages/ProductDetail';
import { CategoryPage } from '@/pages/CategoryPage';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

export const routes: RouteRecord[] = [
  { path: '/', Component: RootHome },
  {
    path: '/:lang',
    Component: LangLayout,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: ProductsCatalog },
      { path: 'products/:slug', Component: ProductDetail },
      { path: 'categories/:slug', Component: CategoryPage },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
];
