// src/components/common/Tab/Tab.tsx
import React from 'react';
import styles from './Tab.module.css';

export interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Tab: React.FC<TabProps> = ({
  label,
  isActive = false,
  onClick,
  icon,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ''} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={onClick}
      disabled={disabled}
      role="tab"
      aria-selected={isActive}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default Tab;