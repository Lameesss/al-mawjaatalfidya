import { Link, useLocation } from 'react-router-dom';
import { useLang, LANG_STORAGE_KEY, type Lang } from '@/i18n';
import { swapLang } from '@/utils/paths';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { lang, t } = useLang();
  const location = useLocation();

  function handleSelect(next: Lang) {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable (private browsing) — language still
      // switches via navigation, it just won't persist across visits.
    }
  }

  return (
    <div className={styles.switcher} role="group" aria-label={t.nav.languageLabel}>
      <Link
        to={swapLang(location.pathname, 'en')}
        onClick={() => handleSelect('en')}
        className={`${styles.option} ${lang === 'en' ? styles.active : ''}`}
        aria-current={lang === 'en' ? 'true' : undefined}
      >
        EN
      </Link>
      <Link
        to={swapLang(location.pathname, 'ar')}
        onClick={() => handleSelect('ar')}
        className={`${styles.option} ${lang === 'ar' ? styles.active : ''}`}
        aria-current={lang === 'ar' ? 'true' : undefined}
      >
        العربية
      </Link>
    </div>
  );
}
