import React from 'react';
import axios from 'axios';

import RegisterFormComponent from '../../public/components/registerFormComponent';

const Register = () => {
  const handleRegistration = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3001/register', userData);
      if (response && response.data) {
        console.log('Registration successful:', response.data);
      } else {
        console.error('Response or data is undefined');
      }
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
    }
    console.log('Registering user:', userData);
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <RegisterFormComponent onSubmit={handleRegistration} />
    </div>
  );
};

export default Register;
