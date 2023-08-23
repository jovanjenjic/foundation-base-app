import React from 'react';
import { useGetUsersQuery } from '@base/features/login/services/Login.services';

const LoginPage = () => {
  const response = useGetUsersQuery();
  console.log('response', response);
  return (
    <div>
      <p>Login Page</p>
    </div>
  );
};

export default LoginPage;
