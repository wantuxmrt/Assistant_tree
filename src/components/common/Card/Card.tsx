// src/components/common/Card/Card.tsx
import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'low' | 'medium' | 'high';
  padding?: 'none' | 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  children,
  elevation = 'low',
  padding = 'medium',
  borderRadius = 'medium',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`${styles.card} ${styles[elevation]} ${styles[padding]} ${
        styles[`borderRadius_${borderRadius}`]
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;