import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Assuming you have these stored in environment variables or some config
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)  
      .single();

    if (error) {
      alert('Login failed!');
      console.error('Login error:', error);
    } else {
      setToken(user.token);  // Assuming the token is stored in the user record
      console.log('Logged in:', user);
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
      </form>
    </div>
  );
}
