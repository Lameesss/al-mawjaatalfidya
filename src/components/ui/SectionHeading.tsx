import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({ eyebrow, title, subtitle, center, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ''}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Tag className={styles.title}>{title}</Tag>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}
