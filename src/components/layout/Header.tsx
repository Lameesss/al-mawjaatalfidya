import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { buildPath, categoryPath } from '@/utils/paths';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import styles from './Header.module.css';

export function Header() {
  const { lang, t } = useLang();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const homePath = buildPath(lang);
  const productsPath = buildPath(lang, 'products');
  const aboutPath = buildPath(lang, 'about');
  const contactPath = buildPath(lang, 'contact');

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link to={homePath} className={styles.brand}>
          <img
            src={lang === 'ar' ? '/logo/ar.png' : '/logo/eng.png'}
            alt={t.common.brandName}
            className={styles.logo}
            width={90}
            height={90}
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{t.common.brandName}</span>
            <span className={styles.brandTagline}>{t.common.tagline}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={t.nav.menuLabel}>
          <Link to={homePath} className={`${styles.navLink} ${isActive(homePath) ? styles.navLinkActive : ''}`}>
            {t.nav.home}
          </Link>

          <div className={styles.navItem}>
            <Link to={productsPath} className={styles.navButton}>
              {t.nav.products}
              <Icon name="ChevronDown" className={styles.chev} />
            </Link>
            <div className={styles.dropdown}>
              <Link to={productsPath} className={styles.dropdownLink}>
                {t.common.allCategory}
              </Link>
              {categories.map((cat) => (
                <Link key={cat.id} to={categoryPath(lang, cat.id)} className={styles.dropdownLink}>
                  {t.category.items[cat.id].name}
                </Link>
              ))}
            </div>
          </div>

          <Link to={aboutPath} className={`${styles.navLink} ${isActive(aboutPath) ? styles.navLinkActive : ''}`}>
            {t.nav.about}
          </Link>
          <Link to={contactPath} className={`${styles.navLink} ${isActive(contactPath) ? styles.navLinkActive : ''}`}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <Button to={contactPath} size="sm" className={styles.ctaDesktop}>
            {t.common.contactUs}
          </Button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={t.nav.menuLabel}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} className={styles.menuIcon} />
          </button>
        </div>
      </div>
    </header>
    <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
