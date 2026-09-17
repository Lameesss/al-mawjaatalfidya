import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './Button.module.css';
import { Icon } from './Icon';

type Variant = 'primary' | 'secondary' | 'teal' | 'ghost';
type Size = 'md' | 'sm';

interface SharedProps {
  variant?: Variant;
  size?: Size;
  iconEnd?: string;
  iconStart?: string;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };
type ButtonAsLink = SharedProps & Omit<LinkProps, 'className'> & { href?: undefined };
type ButtonAsAnchor = SharedProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { to?: undefined };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

function classes(variant: Variant, size: Size, block?: boolean, className?: string) {
  return [styles.btn, styles[variant], size === 'sm' ? styles.sm : '', block ? styles.block : '', className]
    .filter(Boolean)
    .join(' ');
}

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', iconEnd, iconStart, block, className, children, ...rest },
  ref,
) {
  const cls = classes(variant, size, block, className);
  const content = (
    <>
      {iconStart ? <Icon name={iconStart} className={styles.icon} /> : null}
      <span>{children}</span>
      {iconEnd ? <Icon name={iconEnd} className={`${styles.icon} ${styles.iconEnd}`} /> : null}
    </>
  );

  if ('to' in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link ref={ref as never} to={to} className={cls} {...linkRest}>
        {content}
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    const anchorRest = rest as ButtonAsAnchor;
    return (
      <a ref={ref as never} className={cls} {...anchorRest}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button ref={ref as never} type={buttonRest.type ?? 'button'} className={cls} {...buttonRest}>
      {content}
    </button>
  );
});
