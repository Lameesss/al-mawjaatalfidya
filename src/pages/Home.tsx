import { useLang } from '@/i18n';
import { categories } from '@/data/categories';
import { getLocalized, getMotherChildProducts, getProduct } from '@/data/products';
import { buildPath, categoryPath, productPath } from '@/utils/paths';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Home.module.css';

const FEATURED_IDS = ['hb112-color-doppler', 'electric-operating-table', 'manual-wheelchair', 'first-aid-kit-hd803'];
const EQUIPMENT_SPOTLIGHT_IDS = ['ceiling-led-surgical-light', 'centrifuge-4000', 'ua1020-bp-monitor', 'sh100-urine-analyzer'];
const WHY_ICONS = ['Package', 'Globe2', 'Baby', 'MessageCircle'];

export function Home() {
  const { lang, t } = useLang();

  const featured = FEATURED_IDS.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const equipmentSpotlight = EQUIPMENT_SPOTLIGHT_IDS.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const heroProduct = getProduct('hb112-color-doppler');
  const equipmentFeatures = equipmentSpotlight[0] ? getLocalized(equipmentSpotlight[0], lang).localizedFeatures : [];
  const motherChildProducts = getMotherChildProducts();

  return (
    <>
      <Seo title={t.home.metaTitle} description={t.home.metaDescription} image={heroProduct?.image} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={styles.heroEyebrow}>{t.home.eyebrow}</p>
            <h1 className={styles.heroTitle}>{t.home.heroTitle}</h1>
            <p className={styles.heroSubtitle}>{t.home.heroSubtitle}</p>
            <div className={styles.heroActions}>
              <Button to={buildPath(lang, 'products')} iconEnd="ArrowRight">
                {t.home.heroCtaPrimary}
              </Button>
              <Button to={buildPath(lang, 'contact')} variant="secondary">
                {t.home.heroCtaSecondary}
              </Button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroBackdrop} aria-hidden="true" />
            <div className={styles.heroImageCard}>
              {heroProduct ? (
                <img
                  src={heroProduct.image}
                  alt={getLocalized(heroProduct, lang).localizedName}
                  className={styles.heroImage}
                  width={420}
                  height={460}
                  loading="eager"
                  fetchPriority="high"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.heroStrip}>
            {categories.map((cat) => (
              <span key={cat.id} className={styles.heroChip}>
                <Icon name={cat.icon} />
                {t.category.items[cat.id].name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className={styles.section}>
        <div className={`container ${styles.introGrid}`}>
          <Reveal>
            <SectionHeading eyebrow={t.home.introEyebrow} title={t.home.introTitle} />
          </Reveal>
          <Reveal delay={100} className={styles.introBody}>
            <p>{t.home.introBody}</p>
            <div className={styles.introStats}>
              {categories.map((cat, i) => (
                <Reveal key={cat.id} delay={160 + i * 80} className={styles.introStatCard}>
                  <Icon name={cat.icon} />
                  <p className={styles.introStatLabel}>{t.category.items[cat.id].name}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.categoriesEyebrow}
              title={t.home.categoriesTitle}
              subtitle={t.home.categoriesSubtitle}
              center
            />
          </Reveal>
          <div className={styles.categoriesGrid} style={{ marginBlockStart: 40 }}>
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 90}>
                <CategoryCard category={cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className={styles.section}>
        <div className="container">
          <Reveal className={styles.sectionHeadRow}>
            <SectionHeading eyebrow={t.home.featuredEyebrow} title={t.home.featuredTitle} subtitle={t.home.featuredSubtitle} />
          </Reveal>
          <div className={styles.featuredGrid}>
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <div className={styles.featuredFooter}>
            <Button to={buildPath(lang, 'products')} variant="secondary" iconEnd="ArrowRight">
              {t.home.featuredCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Medical Equipment spotlight */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`container ${styles.split}`}>
          <Reveal>
            <SectionHeading eyebrow={t.home.equipmentEyebrow} title={t.home.equipmentTitle} />
            <p style={{ marginBlockStart: 18, color: 'var(--color-ink-500)', lineHeight: 1.75 }}>{t.home.equipmentBody}</p>
            <ul className={styles.splitList}>
              {equipmentFeatures.map((feature) => (
                <li key={feature} className={styles.splitListItem}>
                  <Icon name="ShieldCheck" className={styles.splitListIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className={styles.splitCta}>
              <Button to={categoryPath(lang, 'equipment')} iconEnd="ArrowRight">
                {t.home.equipmentCta}
              </Button>
            </div>
          </Reveal>
          <div className={styles.splitMedia}>
            {equipmentSpotlight.map((product, i) => (
              <Reveal key={product.id} delay={i * 90} className={styles.splitMediaItem}>
                <img src={product.image} alt={getLocalized(product, lang).localizedName} loading="lazy" width={200} height={200} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mother & Child */}
      {motherChildProducts.length > 0 ? (
        <section className={`${styles.section} ${styles.warmSection}`}>
          <div className={`container ${styles.split} ${styles.splitReverse}`}>
            <Reveal>
              <SectionHeading eyebrow={t.home.motherChildEyebrow} title={t.home.motherChildTitle} />
              <p style={{ marginBlockStart: 18, color: 'var(--color-ink-500)', lineHeight: 1.75 }}>{t.home.motherChildBody}</p>
              <div className={styles.splitCta}>
                <Button to={categoryPath(lang, 'supplies')} variant="teal" iconEnd="ArrowRight">
                  {t.home.motherChildCta}
                </Button>
              </div>
            </Reveal>
            <div className={styles.splitMedia}>
              {motherChildProducts.map((product, i) => {
                const localized = getLocalized(product, lang);
                return (
                  <Reveal key={product.id} delay={i * 90} className={styles.motherChildCard}>
                    <div className={styles.motherChildImage}>
                      <img src={product.image} alt={localized.localizedName} loading="lazy" width={260} height={195} />
                    </div>
                    <p className={styles.motherChildName}>{localized.localizedName}</p>
                    <Button to={productPath(lang, product.id)} variant="ghost" size="sm" iconEnd="ArrowRight">
                      {t.common.viewProduct}
                    </Button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Why us */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} center />
          </Reveal>
          <div className={styles.whyGrid} style={{ marginBlockStart: 40 }}>
            {t.home.whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <Icon name={WHY_ICONS[i] ?? 'Package'} />
                </div>
                <p className={styles.whyTitle}>{item.title}</p>
                <p className={styles.whyBody}>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <Reveal className={styles.aboutTeaser}>
            <div>
              <p className={styles.aboutTeaserEyebrow}>{t.home.aboutTeaserEyebrow}</p>
              <h2 className={styles.aboutTeaserTitle}>{t.home.aboutTeaserTitle}</h2>
              <p className={styles.aboutTeaserBody}>{t.home.aboutTeaserBody}</p>
            </div>
            <Button to={buildPath(lang, 'about')} variant="secondary" iconEnd="ArrowRight">
              {t.home.aboutTeaserCta}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.section}>
        <div className="container">
          <Reveal className={styles.finalCta}>
            <h2 className={styles.finalCtaTitle}>{t.home.ctaTitle}</h2>
            <p className={styles.finalCtaBody}>{t.home.ctaBody}</p>
            <div className={styles.finalCtaActions}>
              <Button to={buildPath(lang, 'contact')} variant="secondary" className={styles.onDark}>
                {t.home.ctaPrimary}
              </Button>
              <Button to={buildPath(lang, 'products')} variant="secondary" className={styles.onDark} iconEnd="ArrowRight">
                {t.home.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
