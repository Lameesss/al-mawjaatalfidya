import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { buildPath, categoryPath } from '@/utils/paths';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { lang, t } = useLang();
  const location = useLocation();
  const contactPath = buildPath(lang, 'contact');

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Blurred backdrop — click to close */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-down drawer */}
      <div id="mobile-nav" className={`${styles.panel} ${open ? styles.open : ''}`} aria-hidden={!open}>
        <div className={styles.inner}>

          <Link
            to={buildPath(lang)}
            className={`${styles.link} ${isActive(buildPath(lang)) ? styles.linkActive : ''}`}
            onClick={onClose}
          >
            {t.nav.home}
          </Link>

          <Link
            to={buildPath(lang, 'products')}
            className={`${styles.link} ${isActive(buildPath(lang, 'products')) ? styles.linkActive : ''}`}
            onClick={onClose}
          >
            {t.nav.products}
          </Link>

          <span className={styles.groupTitle}>{t.nav.categories}</span>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={categoryPath(lang, cat.id)}
              className={styles.subLink}
              onClick={onClose}
            >
              {t.category.items[cat.id].name}
            </Link>
          ))}

          <div className={styles.divider} />

          <Link
            to={buildPath(lang, 'about')}
            className={`${styles.link} ${isActive(buildPath(lang, 'about')) ? styles.linkActive : ''}`}
            onClick={onClose}
          >
            {t.nav.about}
          </Link>

          <Link
            to={buildPath(lang, 'contact')}
            className={`${styles.link} ${isActive(buildPath(lang, 'contact')) ? styles.linkActive : ''}`}
            onClick={onClose}
          >
            {t.nav.contact}
          </Link>

          <div className={styles.footerRow}>
            <LanguageSwitcher />
            <Button to={contactPath} size="sm" className={styles.footerCta} onClick={onClose}>
              {t.common.contactUs}
            </Button>
          </div>

        </div>
      </div>
    </>
  );
}
