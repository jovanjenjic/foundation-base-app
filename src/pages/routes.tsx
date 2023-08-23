import React, { lazy, Suspense } from 'react';
import ProtectedLayout from '@base/components/Layouts/ProtectedLayout/ProtectedLayout';
import Spinner from '@components/Spinner';
import NotProtectedRoute from '@base/components/Routes/NotProtectedRoute';
import ProtectedRoute from '@base/components/Routes/ProtectedRoute';
import AuthLayout from '@base/components/Layouts/AuthLayout/AuthLayout';

const SchedulePage = lazy(() => import('@pages/SchedulePage'));
const DashboardPage = lazy(() => import('@pages/DashboardPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const RegisterPage = lazy(() => import('@pages/RegisterPage'));
const Page404 = lazy(() => import('@base/pages/Page404/Page404'));

const notProtectedRoutes = [
  {
    path: '/auth',
    element: (
      <NotProtectedRoute>
        <AuthLayout />
      </NotProtectedRoute>
    ),
    children: [
      {
        path: 'login',
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<Spinner />}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Spinner />}>
            <Page404 goBackTo="/auth/login" />
          </Suspense>
        ),
      },
    ],
  },
];
const protectedRoutes = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <ProtectedLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'schedule',
        element: (
          <Suspense fallback={<Spinner />}>
            <SchedulePage />
          </Suspense>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<Spinner />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Spinner />}>
            <Page404 />
          </Suspense>
        ),
      },
    ],
  },
];

export default [...protectedRoutes, ...notProtectedRoutes];
