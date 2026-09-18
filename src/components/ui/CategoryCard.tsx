import { Link } from 'react-router-dom';
import { useLang } from '@/i18n';
import type { Category } from '@/data/categories';
import { categoryPath } from '@/utils/paths';
import styles from './CategoryCard.module.css';
import { Icon } from './Icon';

interface CategoryCardProps {
  category: Category;
  count?: number;
  index?: number;
}

export function CategoryCard({ category, count, index = 0 }: CategoryCardProps) {
  const { lang, t } = useLang();
  const copy = t.category.items[category.id];

  return (
    <Link to={categoryPath(lang, category.id)} className={styles.card} data-tone={index % 3}>
      <div className={styles.imageWrap}>
        <img src={category.image} alt={copy.name} loading="lazy" width={320} height={320} className={styles.image} />
      </div>
      <div className={styles.body}>
        {typeof count === 'number' ? <p className={styles.eyebrow}>{t.home.categoryCount(count)}</p> : null}
        <h3 className={styles.name}>{copy.name}</h3>
        <span className={styles.cta}>
          {t.common.explore}
          <Icon name="ArrowRight" className={styles.ctaIcon} />
        </span>
      </div>
    </Link>
  );
}
