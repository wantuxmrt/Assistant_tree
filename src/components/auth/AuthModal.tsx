import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (userData: {
    email: string;
    password: string;
    role: string;
    organization: string;
    department: string;
  }) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onLogin,
  onRegister
}) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [organization, setOrganization] = useState('org1');
  const [department, setDepartment] = useState('dep1');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    
    if (isLoginMode) {
      onLogin(email, password);
    } else {
      if (!email.endsWith('@mrtexpert.ru')) {
        setError('Только корпоративные email разрешены');
        return;
      }
      
      onRegister({ email, password, role, organization, department });
    }
    
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setRole('user');
    setOrganization('org1');
    setDepartment('dep1');
    setError('');
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {isLoginMode ? 'Вход в систему' : 'Регистрация'}
          </h3>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@mrtexpert.ru"
              label="Email"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ваш пароль"
              label="Пароль"
              required
            />
          </div>
          
          {!isLoginMode && (
            <>
              <div className={styles.formGroup}>
                <Select
                  label="Роль"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  options={[
                    { value: 'user', label: 'Пользователь' },
                    { value: 'support', label: 'Поддержка' },
                    { value: 'admin', label: 'Администратор' },
                    { value: 'manager', label: 'Менеджер' },
                  ]}
                />
              </div>
              
              <div className={styles.formGroup}>
                <Select
                  label="Организация"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  options={[
                    { value: 'org1', label: 'Организация 1' },
                    { value: 'org2', label: 'Организация 2' },
                    { value: 'org3', label: 'Организация 3' },
                  ]}
                />
              </div>
              
              <div className={styles.formGroup}>
                <Select
                  label="Отдел"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  options={[
                    { value: 'dep1', label: 'Отдел поддержки' },
                    { value: 'dep2', label: 'Бухгалтерия' },
                    { value: 'dep3', label: 'ИТ отдел' },
                    { value: 'dep4', label: 'Отдел продаж' },
                  ]}
                />
              </div>
            </>
          )}
          
          {error && <div className={styles.errorMessage}>{error}</div>}
          
          <Button type="submit" variant="primary" fullWidth>
            {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </form>
        
        <div className={styles.switchMode}>
          <button 
            type="button" 
            className={styles.switchButton}
            onClick={toggleMode}
          >
            {isLoginMode 
              ? 'Создать новый аккаунт' 
              : 'Уже есть аккаунт? Войти'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;