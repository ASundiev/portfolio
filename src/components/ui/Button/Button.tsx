'use client';

import React from 'react';
import { ArrowUpRight } from 'phosphor-react';
import styles from './Button.module.css';
import { typography } from '@/tokens';

export type ButtonVariant = 'outline' | 'filled' | 'icon-only';
export type ButtonSize = 'large' | 'medium' | 'small' | 'xSmall';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  showArrow?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'outline',
  size = 'medium',
  children,
  showArrow = false,
  href,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {children && <span className={styles.button__text}>{children}</span>}
      {showArrow && (
        <ArrowUpRight
          className={styles.button__icon}
          size={size === 'large' ? 20 : size === 'medium' ? 18 : size === 'small' ? 16 : 13.5}
          weight="bold"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

