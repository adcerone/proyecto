// LoginPage.jsx
import React from 'react';
import LoginFormComponent from '../../public/components/loginFormComponent';
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
      <h1>Login Page</h1>
      <LoginFormComponent onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
