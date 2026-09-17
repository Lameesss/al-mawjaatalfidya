import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { useLang } from '@/i18n';
import { swapLang } from '@/utils/paths';

// No real production domain has been provided yet — canonical/alternate/OG
// URLs stay relative until VITE_SITE_URL is set, rather than fabricating one.
const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? '';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

// Renders into <head> via vite-react-ssg's <Head> (a react-helmet wrapper),
// which is what actually gets captured in the pre-rendered static HTML for
// each route — a plain useEffect DOM mutation would not survive the SSG pass.
export function Seo({ title, description, image, jsonLd }: SeoProps) {
  const { lang } = useLang();
  const { pathname } = useLocation();

  return (
    <Head>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_AR' : 'en_US'} />
      {image ? <meta property="og:image" content={`${SITE_URL}${image}`} /> : null}
      <link rel="canonical" href={`${SITE_URL}${pathname}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${swapLang(pathname, 'en')}`} />
      <link rel="alternate" hrefLang="ar" href={`${SITE_URL}${swapLang(pathname, 'ar')}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Head>
  );
}
