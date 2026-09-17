import { useParams } from 'react-router-dom';
import { useLang } from '@/i18n';
import { getCategory, categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { buildPath, categoryPath } from '@/utils/paths';
import { Seo } from '@/components/Seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import styles from './CategoryPage.module.css';

export function CategoryPage() {
  const { lang, t } = useLang();
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;

  if (!category) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <Seo title={t.category.notFoundTitle} description={t.category.notFoundBody} />
        <h1>{t.category.notFoundTitle}</h1>
        <p style={{ color: 'var(--color-ink-500)', marginBlockStart: 12, marginBlockEnd: 24 }}>{t.category.notFoundBody}</p>
        <Button to={buildPath(lang, 'products')}>{t.common.backToHome}</Button>
      </div>
    );
  }

  const copy = t.category.items[category.id];
  const categoryProducts = getProductsByCategory(category.id);
  const otherCategories = categories.filter((c) => c.id !== category.id);

  return (
    <>
      <Seo title={`${copy.name} — ${t.common.brandName}`} description={copy.intro} image={category.image} />

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={category.image} alt="" />
        </div>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Breadcrumb
            onDark
            items={[
              { label: t.nav.home, to: buildPath(lang) },
              { label: t.category.breadcrumbCategories, to: buildPath(lang, 'products') },
              { label: copy.name },
            ]}
          />
          <div className={styles.iconBadge}>
            <Icon name={category.icon} />
          </div>
          <h1 className={styles.heroTitle}>{copy.name}</h1>
          <p className={styles.heroDesc}>{copy.intro}</p>
          <p className={styles.count}>{t.category.productsInCategory(categoryProducts.length)}</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.grid}>
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <section className={styles.related}>
        <div className="container">
          <h2 style={{ fontSize: '1.1rem', color: 'var(--color-primary-800)', marginBlockEnd: 18 }}>
            {t.category.relatedCategoriesTitle}
          </h2>
          <div className={styles.relatedGrid}>
            {otherCategories.map((c) => (
              <Button key={c.id} to={categoryPath(lang, c.id)} variant="secondary" iconStart={c.icon}>
                {t.category.items[c.id].name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className={`container ${styles.cta}`}>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-primary-800)', fontWeight: 700, marginBlockEnd: 18 }}>
          {t.category.ctaTitle}
        </p>
        <Button to={buildPath(lang, 'contact')} iconEnd="ArrowRight">
          {t.category.ctaButton}
        </Button>
      </div>
    </>
  );
}
