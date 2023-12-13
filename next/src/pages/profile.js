import React from 'react';



const Profile = () => {

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('token');
    window.location.reload();
  };

  if (!user) {

    return <div>Loading...</div>;
  }


  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <p>usuario: {user.nombre}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
