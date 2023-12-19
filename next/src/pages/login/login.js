// LoginPage.jsx
import React from 'react';
import LoginComponent from '../../../public/components/loginComponent';
import axios from 'axios';

const LoginPage = () => {
  const handleLoginSuccess  = async ({ username, password }) => {
    try {
      const response = await axios.post('/login', { username, password });
      console.log('Login successful:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error.response);

    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginComponent onLoginSuccess={handleLoginSuccess } />
    </div>
  );
};

export default LoginPage;
