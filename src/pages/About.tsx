import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { buildPath } from '@/utils/paths';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import styles from './About.module.css';

export function About() {
  const { lang, t } = useLang();

  return (
    <>
      <Seo title={t.about.metaTitle} description={t.about.metaDescription} />

      <section className={styles.hero}>
        <div className="container">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.intro} center as="h1" />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading title={t.about.whatWeImportTitle} center />
          <div className={styles.categoriesGrid} style={{ marginBlockStart: 36 }}>
            {categories.map((cat) => {
              const copy = t.category.items[cat.id];
              return (
                <div key={cat.id} className={styles.categoryCard}>
                  <div className={styles.categoryIcon}>
                    <Icon name={cat.icon} />
                  </div>
                  <p className={styles.categoryName}>{copy.name}</p>
                  <p className={styles.categoryDesc}>{copy.intro}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section}`} style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} center />
          <div className={styles.valuesGrid} style={{ marginBlockStart: 36 }}>
            {t.about.values.map((value, i) => (
              <div key={value.title} className={styles.valueCard}>
                <p className={styles.valueNum}>0{i + 1}</p>
                <p className={styles.valueTitle}>{value.title}</p>
                <p className={styles.valueBody}>{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>{t.about.ctaTitle}</h2>
            <p className={styles.ctaBody}>{t.about.ctaBody}</p>
            <Button to={buildPath(lang, 'contact')} variant="secondary" iconEnd="ArrowRight">
              {t.about.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
