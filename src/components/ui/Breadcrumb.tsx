import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';
import { Icon } from './Icon';

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
  onDark?: boolean;
}

export function Breadcrumb({ items, onDark }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`${styles.nav} ${onDark ? styles.onDark : ''}`}>
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {i > 0 ? <Icon name="ChevronRight" className={styles.sep} /> : null}
            {item.to ? (
              <Link to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
