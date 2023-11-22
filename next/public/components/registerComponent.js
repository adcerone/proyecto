import React, { useState } from 'react';

const RegisterComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    
    const handleRegistration = async () => {
    try {
        const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log(data);

        
    } catch (error) {
        console.error('Error registering user:', error);
    }
    };


    return (
        <div>
        <h1>register</h1>
        <form onSubmit={handleRegistration}>
            <label>
            Email:
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
            Password:
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">register</button>
        </form>
        </div>
    );
};

export default RegisterComponent;