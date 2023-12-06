import React, { useState } from 'react';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');

            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log(data);
                console.log('Login successful');

                // Redirect or perform actions after successful login
            } else {
                console.error('Non-JSON response:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            setError('Invalid email or password'); // Set a more user-friendly error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='loginModal'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                {error && <p className="error">{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginComponent;