import React, { useState, useEffect } from 'react';
import Login from '../../src/pages/login';
import Register from '../../src/pages/register';
import Profile from '../../src/pages/profile';
import axios from 'axios';

const ProfileBtnController = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
        if (!token) {
          // Handle the case where the token is not available
          console.error('Authorization token not found');
          return;
        }

        const response = await axios.get('http://localhost:3001/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        setLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  console.log('isLoggedIn:', isLoggedIn);

  return <ProfileBtnComponent isLoggedIn={isLoggedIn} />;
};

const LoggedInContent = () => {
  console.log('Rendering LoggedInContent');
  return (
    <div>
      <p>Welcome, User!</p>
      <Profile />
    </div>
  );
};

const NonLoggedInContent = () => {
  console.log('Rendering NonLoggedInContent');
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};


const ProfileBtnComponent = ({ isLoggedIn }) => {
  console.log('Rendering ProfileBtnComponent with isLoggedIn:', isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <LoggedInContent /> : <NonLoggedInContent />}
    </div>
  );
};

export { LoggedInContent, NonLoggedInContent };
export default ProfileBtnController;
