import React, { useState, useEffect } from 'react';
import Login from '../../src/pages/login';
import Register from '../../src/pages/register';
import Profile from '../../src/pages/profile';
import axios from 'axios'



const ProfileBtnController = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
      // Check if the user is already authenticated
      const checkAuthentication = async () => {
        try {
          const response = await axios.get('/login/user'); // Replace with your actual authentication endpoint
          setLoggedIn(response.data.isAuthenticated);
        } catch (error) {
          console.error('Error checking authentication:', error);
        }
      };
  
      checkAuthentication();
    }, []);
  
    return <ProfileBtnComponent isLoggedIn={isLoggedIn} />;
};

const LoggedInContent = () => (
    <div>
        <p>Welcome, User!</p>
        <Profile />
    </div>
);

const NonLoggedInContent = () => (
    <div>
        <p>Please log in or register.</p>
        <Login />
        <Register />
    </div>
);

const ProfileBtnComponent = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <LoggedInContent /> : <NonLoggedInContent />}
        </div>
    );
};

export { LoggedInContent, NonLoggedInContent };
export default ProfileBtnComponent;
