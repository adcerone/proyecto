import React, { useEffect, useState } from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('token');
      window.location.reload();
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

