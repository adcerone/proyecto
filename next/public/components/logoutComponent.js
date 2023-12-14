import React, { useEffect, useState } from 'react';

const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('token');
      window.location.reload();
    }
  };

export default handleLogout