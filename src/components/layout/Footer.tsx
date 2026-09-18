import { Link } from 'react-router-dom';
import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { contactInfo } from '@/data/contact';
import { buildPath, categoryPath } from '@/utils/paths';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Footer.module.css';

export function Footer() {
  const { lang, t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <div className={styles.brandRow}>
            <img
              src={lang === 'ar' ? '/logo/ar.png' : '/logo/eng.png'}
              alt={t.common.brandName}
              className={styles.logo}
              width={38}
              height={38}
            />
            <span className={styles.brandName}>{t.common.brandName}</span>
          </div>
          <p className={styles.desc}>{t.footer.tagline}</p>
          <LanguageSwitcher />
        </div>

        <div>
          <p className={styles.colTitle}>{t.footer.quickLinksTitle}</p>
          <nav className={styles.links}>
            <Link to={buildPath(lang)} className={styles.link}>
              {t.nav.home}
            </Link>
            <Link to={buildPath(lang, 'products')} className={styles.link}>
              {t.nav.products}
            </Link>
            <Link to={buildPath(lang, 'about')} className={styles.link}>
              {t.nav.about}
            </Link>
            <Link to={buildPath(lang, 'contact')} className={styles.link}>
              {t.nav.contact}
            </Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>{t.footer.categoriesTitle}</p>
          <nav className={styles.links}>
            {categories.map((cat) => (
              <Link key={cat.id} to={categoryPath(lang, cat.id)} className={styles.link}>
                {t.category.items[cat.id].name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>{t.footer.contactTitle}</p>
          <div className={styles.links}>
            {contactInfo.phone ? (
              <a href={`tel:${contactInfo.phone}`} className={styles.contactRow}>
                <Icon name="Phone" className={styles.contactIcon} />
                <span>{contactInfo.phone}</span>
              </a>
            ) : null}
            {contactInfo.email ? (
              <a href={`mailto:${contactInfo.email}`} className={styles.contactRow}>
                <Icon name="Mail" className={styles.contactIcon} />
                <span>{contactInfo.email}</span>
              </a>
            ) : null}
            {contactInfo.address ? (
              <span className={styles.contactRow}>
                <Icon name="MapPin" className={styles.contactIcon} />
                <span>{contactInfo.address[lang]}</span>
              </span>
            ) : null}

          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {t.common.brandName}. {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}
