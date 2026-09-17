import { useMemo, useState } from 'react';
import { useLang } from '@/i18n';
import { products, getLocalized } from '@/data/products';
import { productFilters, type CategoryId } from '@/data/categories';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Icon } from '@/components/ui/Icon';
import styles from './ProductsCatalog.module.css';

type FilterValue = 'all' | CategoryId;

export function ProductsCatalog() {
  const { lang, t } = useLang();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<FilterValue>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      if (filter !== 'all' && product.category !== filter) return false;
      if (!q) return true;
      const localized = getLocalized(product, lang);
      return (
        localized.localizedName.toLowerCase().includes(q) || localized.localizedDescription.toLowerCase().includes(q)
      );
    });
  }, [query, filter, lang]);

  return (
    <>
      <Seo title={t.products.metaTitle} description={t.products.metaDescription} />

      <section className={styles.hero}>
        <div className="container">
          <SectionHeading title={t.products.title} subtitle={t.products.subtitle} />
        </div>
      </section>

      <div className="container">
        <div className={styles.toolbar}>
          <div className={styles.searchWrap}>
            <Icon name="Search" className={styles.searchIcon} />
            <input
              type="search"
              className={styles.searchInput}
              placeholder={t.products.searchPlaceholder}
              aria-label={t.products.searchLabel}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.filters}>
            {productFilters.map((f) => (
              <button
                key={f}
                type="button"
                className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f === 'all' ? t.common.allCategory : t.category.items[f].name}
              </button>
            ))}
          </div>
        </div>

        <p className={styles.resultsRow}>{t.products.resultsCount(filtered.length)}</p>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ paddingBlockEnd: 80 }}>
            <EmptyState
              title={t.products.emptyTitle}
              body={t.products.emptyBody}
              action={
                <button
                  type="button"
                  className={styles.filterBtn}
                  onClick={() => {
                    setQuery('');
                    setFilter('all');
                  }}
                >
                  {t.products.emptyReset}
                </button>
              }
            />
          </div>
        )}
      </div>
    </>
  );
}
