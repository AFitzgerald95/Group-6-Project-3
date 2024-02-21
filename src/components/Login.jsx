import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Execute the login mutation
      await loginUser({
        variables: {
          username: username,
          password: password,
        },
      });
      console.log('Login successful');
      // Reset form fields
      setUsername('');
      setPassword('');
      // Add any actions after successful login, e.g., redirect or state update
    } catch (err) {
      // Handle login error
      console.error('Login error', err);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>Login</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again. {error.message}</p>}
    </div>
  );
}

export default Login;


