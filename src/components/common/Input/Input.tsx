// src/components/common/Input/Input.tsx
import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, fullWidth = false, startIcon, endIcon, className = '', ...props },
    ref
  ) => {
    return (
      <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''}`}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputContainer}>
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          <input
            ref={ref}
            className={`${styles.input} ${error ? styles.error : ''} ${
              startIcon ? styles.withStartIcon : ''
            } ${endIcon ? styles.withEndIcon : ''} ${className}`}
            {...props}
          />
          {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;