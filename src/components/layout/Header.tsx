import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang, type Lang } from '@/i18n';
import { categories } from '@/data/categories';
import { buildPath, categoryPath } from '@/utils/paths';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import styles from './Header.module.css';

const LOGOS: Record<Lang, { src: string; width: number; height: number }> = {
  en: { src: '/logo/eng.png', width: 534, height: 409 },
  ar: { src: '/logo/ar.png', width: 378, height: 426 },
};

export function Header() {
  const { lang, t } = useLang();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const logo = LOGOS[lang];

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

  // While the mobile drawer is open: lock page scroll, close on Escape, and
  // close if the viewport grows past the mobile breakpoint (e.g. rotation).
  useEffect(() => {
    if (!mobileOpen) return;
    const desktop = window.matchMedia('(min-width: 901px)');
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMobileOpen(false);
      menuBtnRef.current?.focus();
    };
    const onBreakpoint = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [mobileOpen]);

  const homePath = buildPath(lang);
  const productsPath = buildPath(lang, 'products');
  const aboutPath = buildPath(lang, 'about');
  const contactPath = buildPath(lang, 'contact');

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
    <header className={`${styles.header} ${scrolled || mobileOpen ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link to={homePath} className={styles.brand}>
          <img
            src={logo.src}
            alt={t.common.brandName}
            className={styles.logo}
            width={logo.width}
            height={logo.height}
          />
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
          <div className={styles.langSwitcherHide}>
            <LanguageSwitcher />
          </div>
          <Button to={contactPath} size="sm" className={styles.ctaDesktop}>
            {t.common.contactUs}
          </Button>
          <button
            ref={menuBtnRef}
            type="button"
            className={styles.menuBtn}
            aria-label={t.nav.menuLabel}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
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
