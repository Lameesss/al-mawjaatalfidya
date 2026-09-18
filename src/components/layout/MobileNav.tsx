import { Link } from 'react-router-dom';
import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { buildPath, categoryPath } from '@/utils/paths';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { lang, t } = useLang();

  return (
    <div className={`${styles.panel} ${open ? styles.open : ''}`} aria-hidden={!open}>
      <div className={styles.inner}>
        <Link to={buildPath(lang)} className={styles.link} onClick={onClose}>
          {t.nav.home}
        </Link>
        <Link to={buildPath(lang, 'products')} className={styles.link} onClick={onClose}>
          {t.nav.products}
        </Link>

        <span className={styles.groupTitle}>{t.nav.categories}</span>
        {categories.map((cat) => (
          <Link key={cat.id} to={categoryPath(lang, cat.id)} className={styles.subLink} onClick={onClose}>
            {t.category.items[cat.id].name}
          </Link>
        ))}

        <Link to={buildPath(lang, 'about')} className={styles.link} onClick={onClose}>
          {t.nav.about}
        </Link>
        <Link to={buildPath(lang, 'contact')} className={styles.link} onClick={onClose}>
          {t.nav.contact}
        </Link>

        <div className={styles.footerRow}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
