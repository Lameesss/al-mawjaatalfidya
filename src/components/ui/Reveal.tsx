import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

// Fades + slides content up as it scrolls into view. No-op (content stays
// visible) for prerendered/no-JS output and for prefers-reduced-motion.
export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : '', className].filter(Boolean).join(' ')}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </div>
  );
}
