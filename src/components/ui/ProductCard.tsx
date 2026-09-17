import { Link } from 'react-router-dom';
import { useLang } from '@/i18n';
import { getLocalized, type Product } from '@/data/products';
import { productPath } from '@/utils/paths';
import styles from './ProductCard.module.css';
import { Icon } from './Icon';

interface ProductCardProps {
  product: Product;
  loading?: 'lazy' | 'eager';
}

export function ProductCard({ product, loading = 'lazy' }: ProductCardProps) {
  const { lang, t } = useLang();
  const localized = getLocalized(product, lang);

  return (
    <Link to={productPath(lang, product.id)} className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={product.image}
          alt={localized.localizedName}
          loading={loading}
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{localized.localizedName}</h3>
        <p className={styles.desc}>{localized.localizedDescription}</p>
        <span className={styles.cta}>
          {t.common.viewDetails}
          <Icon name="ArrowRight" className={styles.ctaIcon} />
        </span>
      </div>
    </Link>
  );
}
