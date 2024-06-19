import React, { useState } from 'react';
import { useRouter } from 'next/router';
import users from '../../users.json';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  
    const user = users.find(u => u.username === username && u.passwordHash === hashHex);
  
    if (user) {
      localStorage.setItem('username', username);  
      localStorage.setItem('userToken', 'loggedIn');  
      router.push('/');
    } else {
      setError('Invalid username or password');
    }
  }
  
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
      </form>
    </div>
  );
}
