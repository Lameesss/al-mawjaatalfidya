import type { ReactNode } from 'react';
import styles from './EmptyState.module.css';
import { Icon } from './Icon';

interface EmptyStateProps {
  title: string;
  body: string;
  action?: ReactNode;
}

export function EmptyState({ title, body, action }: EmptyStateProps) {
  return (
    <div className={styles.wrap}>
      <Icon name="Search" className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
      {action}
    </div>
  );
}
