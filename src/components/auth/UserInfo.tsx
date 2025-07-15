import React from 'react';
import styles from './UserInfo.module.css';
import Button from '../common/Button/Button';

interface UserInfoProps {
  name: string;
  role: string;
  avatar: string;
  onLogout: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ 
  name, 
  role, 
  avatar,
  onLogout 
}) => {
  const getRoleClass = () => {
    switch(role) {
      case 'admin': return styles.roleAdmin;
      case 'support': return styles.roleSupport;
      case 'manager': return styles.roleManager;
      default: return styles.roleUser;
    }
  };

  const getRoleLabel = () => {
    switch(role) {
      case 'admin': return 'Администратор';
      case 'support': return 'Поддержка';
      case 'manager': return 'Менеджер';
      default: return 'Пользователь';
    }
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.userName}>{name}</div>
      <div className={`${styles.userRole} ${getRoleClass()}`}>
        {getRoleLabel()}
      </div>
      <div className={styles.userAvatar}>{avatar}</div>
      <Button 
        variant="icon" 
        onClick={onLogout}
        aria-label="Выйти из системы"
      >
        <i className="fas fa-sign-out-alt" style={{ color: '#ff6b6b' }}></i>
      </Button>
    </div>
  );
};

export default UserInfo;