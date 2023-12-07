import React, { useState } from 'react';

const RegisterComponent = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!nombre.trim() || !email.trim() || !password.trim()) {
      setError('Please enter all required fields.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
          role: 'USER', // Default role for registration
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error registering user:', errorData);
        setError(errorData.err.message || 'Registration failed. Please try again.');
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log(data);

      // Reset form and show success message or redirect on successful registration
      setNombre('');
      setEmail('');
      setPassword('');
      setError('');

    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label>
          Nombre:
          <br />
          <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegisterComponent;
