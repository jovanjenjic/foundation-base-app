import React from 'react';
import { useGetUsersQuery } from '@base/features/login/services/Login.services';

const DashboardPage = () => {
  const response = useGetUsersQuery();
  console.log('response', response);
  return (
    <div>
      <p>Dashboard Page</p>
    </div>
  );
};

export default DashboardPage;
