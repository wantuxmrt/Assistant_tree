// src/components/common/Checkbox/Checkbox.tsx
import React, { forwardRef } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', indeterminate = false, ...props }, ref) => {
    return (
      <label className={`${styles.container} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          className={styles.input}
          data-indeterminate={indeterminate}
          {...props}
        />
        <span className={styles.checkmark}></span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;