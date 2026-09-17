import { Outlet, useParams } from 'react-router-dom';
import { isLang } from '@/i18n';
import { SiteLayout } from './SiteLayout';
import { NotFound } from '@/pages/NotFound';

export function LangLayout() {
  const { lang } = useParams<{ lang: string }>();

  if (!isLang(lang)) {
    return (
      <SiteLayout lang="en">
        <NotFound />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout lang={lang}>
      <Outlet />
    </SiteLayout>
  );
}
