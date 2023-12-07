// LoginPage.jsx
import React from 'react';
import LoginComponent from '../../public/components/loginComponent';
import axios from 'axios';

const LoginPage = () => {
  const handleLogin = async ({ username, password }) => {
    try {
      const response = await axios.post('/login', { username, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.response.data);

    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginComponent onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
