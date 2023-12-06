import React from 'react';
import './register.css'
import RegisterComponent from '../../public/components/registerComponent';

const Register = ({ products }) => {
  return (
    <div id='registerModal'>
      <RegisterComponent/>
    </div>
  );
};

export default Register;
