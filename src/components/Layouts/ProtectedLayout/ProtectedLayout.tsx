import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@base/components/Sidebar/Sidebar';
import styles from './ProtectedLayout.module.scss';

const ProtectedLayout: React.FC = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles['main-content']}>
        <Outlet />
      </div>
    </main>
  );
};

export default ProtectedLayout;
