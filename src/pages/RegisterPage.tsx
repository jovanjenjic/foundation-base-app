import React from 'react';
import { useGetUsersQuery } from '@base/features/login/services/Login.services';

const RegisterPage = () => {
  const response = useGetUsersQuery();
  console.log('response', response);
  return (
    <div>
      <p>Register Page</p>
    </div>
  );
};

export default RegisterPage;
