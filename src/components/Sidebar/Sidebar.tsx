import React from 'react';
import cn from 'classnames';
import Logo from '@assets/svg/logo.svg';
import Dashboard from '@assets/svg/dashboard.svg';
import Orders from '@assets/svg/order.svg';
import Schedule from '@assets/svg/schedule.svg';
import Insights from '@assets/svg/insights.svg';
import Finances from '@assets/svg/finances.svg';
import Items from '@assets/svg/items.svg';
import Settings from '@assets/svg/settings.svg';
import Help from '@assets/svg/help.svg';
import Logout from '@assets/svg/logout.svg';
import { NavLink } from 'react-router-dom';
import Svg from '@components/Svg/Svg';
import useCurrentPage from '@base/hooks/useCustomPage';
import { SidebarItem } from './types';
import styles from './Sidebar.module.scss';

const sidebarItems: SidebarItem[] = [
  {
    to: '/dashboard',
    text: 'Dashboard',
    icon: Dashboard,
  },
  {
    to: '/orders',
    text: 'Orders',
    icon: Orders,
  },
  {
    to: '/schedule',
    text: 'Schedule',
    icon: Schedule,
  },
  {
    to: '/insights',
    text: 'Insights',
    icon: Insights,
  },
  {
    to: '/finances',
    text: 'Finances',
    icon: Finances,
  },
  {
    to: '/items',
    text: 'Items',
    icon: Items,
  },
  {
    to: '/settings',
    text: 'Settings',
    icon: Settings,
  },
  {
    to: '/help',
    text: 'Help',
    icon: Help,
  },
];

const Sidebar: React.FC = () => {
  const activePage = useCurrentPage();
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <Svg icon={Logo} width={91} height={40} />
      </div>
      <nav className={styles['nav-item']}>
        {sidebarItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={cn(
              styles['item'],
              item.text === activePage && styles['item--active'],
            )}
          >
            <Svg className={styles.item__icon} icon={item.icon} />
            <p className={styles.item__text}>{item.text}</p>
          </NavLink>
        ))}
        <div className={styles['horizontal-border']} />
        <NavLink to="/auth/login" className={styles.item}>
          <Svg className={styles.item__icon} icon={Logout} />
          <p className={styles['item__text--logout']}>Logout</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
