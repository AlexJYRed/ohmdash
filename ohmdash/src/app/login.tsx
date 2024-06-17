import React, { useState } from 'react';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';
import userData from '../path/to/users.json';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the router

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateUser = (username, password) => {
    const user = userData.find(u => u.username === username);
    if (!user) return false;
    return bcrypt.compareSync(password, user.passwordHash);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser(username, password)) {
      console.log('Login successful');
      alert('Login successful! Redirecting...');
      // Add routing logic here
    } else {
      console.log('Login failed');
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
