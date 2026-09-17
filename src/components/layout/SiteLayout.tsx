import type { ReactNode } from 'react';
import { LanguageContext, dictionaries, getDir, type Lang } from '@/i18n';
import { Header } from './Header';
import { Footer } from './Footer';

interface SiteLayoutProps {
  lang: Lang;
  children: ReactNode;
}

export function SiteLayout({ lang, children }: SiteLayoutProps) {
  const dir = getDir(lang);
  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, t }}>
      <a href="#main-content" className="skip-link">
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </LanguageContext.Provider>
  );
}
