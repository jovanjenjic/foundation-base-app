import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';
import Logo from '@assets/svg/logo.svg';

const AuthLayout: React.FC = () => {
  return (
    <main className={styles.background}>
      <div className={styles.content}>
        <div className={styles['svg-logo']}>
          <img src={Logo} alt="svg-logo" />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
