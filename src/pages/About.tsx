import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { buildPath } from '@/utils/paths';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import styles from './About.module.css';

const VALUE_ICONS = ['Package', 'Globe2', 'MessageCircle'];

export function About() {
  const { lang, t } = useLang();

  return (
    <>
      <Seo title={t.about.metaTitle} description={t.about.metaDescription} />

      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className="container">
          <p className={styles.heroEyebrow}>{t.about.eyebrow}</p>
          <h1 className={styles.heroTitle}>{t.about.title}</h1>
          <p className={styles.heroIntro}>{t.about.intro}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t.about.whatWeImportEyebrow} title={t.about.whatWeImportTitle} center />
          </Reveal>
          <div className={styles.categoriesGrid} style={{ marginBlockStart: 40 }}>
            {categories.map((cat, i) => {
              const copy = t.category.items[cat.id];
              return (
                <Reveal key={cat.id} delay={i * 90} className={styles.categoryCard}>
                  <div className={styles.categoryIcon}>
                    <Icon name={cat.icon} />
                  </div>
                  <p className={styles.categoryName}>{copy.name}</p>
                  <p className={styles.categoryDesc}>{copy.intro}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal className={styles.statement}>
            <span className={styles.statementMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.statementText}>{t.about.statement}</p>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} center />
          </Reveal>
          <div className={styles.valuesGrid} style={{ marginBlockStart: 40 }}>
            {t.about.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon name={VALUE_ICONS[i] ?? 'Package'} />
                </div>
                <p className={styles.valueNum}>0{i + 1}</p>
                <p className={styles.valueTitle}>{value.title}</p>
                <p className={styles.valueBody}>{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal className={styles.cta}>
            <div className={styles.ctaShape} aria-hidden="true" />
            <h2 className={styles.ctaTitle}>{t.about.ctaTitle}</h2>
            <p className={styles.ctaBody}>{t.about.ctaBody}</p>
            <Button to={buildPath(lang, 'contact')} variant="secondary" className={styles.ctaAction} iconEnd="ArrowRight">
              {t.about.ctaButton}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
