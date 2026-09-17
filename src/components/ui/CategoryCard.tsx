import { Link } from 'react-router-dom';
import { useLang } from '@/i18n';
import type { Category } from '@/data/categories';
import { categoryPath } from '@/utils/paths';
import styles from './CategoryCard.module.css';
import { Icon } from './Icon';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { lang, t } = useLang();
  const copy = t.category.items[category.id];

  return (
    <Link to={categoryPath(lang, category.id)} className={styles.card}>
      <img src={category.image} alt={copy.name} loading="lazy" width={400} height={500} className={styles.image} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.iconBadge}>
          <Icon name={category.icon} />
        </div>
        <h3 className={styles.name}>{copy.name}</h3>
        <p className={styles.desc}>{copy.shortDescription}</p>
        <span className={styles.cta}>
          {t.common.explore}
          <Icon name="ArrowRight" className={styles.ctaIcon} />
        </span>
      </div>
    </Link>
  );
}
