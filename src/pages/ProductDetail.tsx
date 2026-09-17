import { useParams } from 'react-router-dom';
import { useLang } from '@/i18n';
import { getLocalized, getProduct, getRelatedProducts } from '@/data/products';
import { buildPath, categoryPath } from '@/utils/paths';
import { Seo } from '@/components/Seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { ProductCard } from '@/components/ui/ProductCard';
import styles from './ProductDetail.module.css';

export function ProductDetail() {
  const { lang, t } = useLang();
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return (
      <div className={`container ${styles.notFoundWrap}`}>
        <Seo title={t.product.notFoundTitle} description={t.product.notFoundBody} />
        <h1>{t.product.notFoundTitle}</h1>
        <p style={{ color: 'var(--color-ink-500)', marginBlockStart: 12, marginBlockEnd: 24 }}>{t.product.notFoundBody}</p>
        <Button to={buildPath(lang, 'products')}>{t.common.backToHome}</Button>
      </div>
    );
  }

  const localized = getLocalized(product, lang);
  const categoryName = t.category.items[product.category].name;
  const related = getRelatedProducts(product, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: localized.localizedName,
    description: localized.localizedDescription,
    image: `${product.image}`,
    category: categoryName,
    brand: {
      '@type': 'Organization',
      name: t.common.brandName,
    },
  };

  return (
    <>
      <Seo title={`${localized.localizedName} — ${t.common.brandName}`} description={localized.localizedDescription} image={product.image} jsonLd={jsonLd} />

      <div className="container">
        <Breadcrumb
          items={[
            { label: t.nav.home, to: buildPath(lang) },
            { label: t.product.breadcrumbProducts, to: buildPath(lang, 'products') },
            { label: categoryName, to: categoryPath(lang, product.category) },
            { label: localized.localizedName },
          ]}
        />

        <div className={styles.top}>
          <div className={styles.imageFrame}>
            <img src={product.image} alt={localized.localizedName} className={styles.image} width={520} height={520} loading="eager" />
          </div>

          <div>
            <span className={styles.badge}>
              <Icon name="Package" style={{ width: 14, height: 14 }} />
              {categoryName}
            </span>
            <h1 className={styles.name}>{localized.localizedName}</h1>
            <p className={styles.desc}>{localized.localizedDescription}</p>

            <p className={styles.featuresTitle}>{t.product.featuresTitle}</p>
            <ul className={styles.featuresList}>
              {localized.localizedFeatures.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <Icon name="CheckCircle2" className={styles.featureIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button to={`${buildPath(lang, 'contact')}?product=${encodeURIComponent(product.id)}`} iconEnd="ArrowRight">
                {t.product.requestInfo}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className={styles.relatedSection}>
          <div className="container">
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-800)', marginBlockEnd: 24 }}>{t.product.relatedTitle}</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
