import React, { useEffect, useState } from 'react';
const handleLogout = import('../../public/components/logoutComponent')

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const storedUser = localStorage.getItem('user');
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      setUser(parsedUser);
    
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <p>Usuario: {user.nombre}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
