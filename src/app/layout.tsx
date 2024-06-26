"use client";
import Head from "next/head";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // Optionally handle no username found, e.g., redirect to login
    }
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    // Redirect to login or perform other cleanup
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html>
      <Head>
        <title>Ohm Base</title>
        <meta name="description" content="Is anyone gonna read this?" />
      </Head>
      <body className={inter.className}> 
      <Header username={username || 'Guest'} onLogout={handleLogout} onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} />
      <main style={{ paddingLeft: sidebarOpen ? '250px' : '0', transition: 'padding-left 0.3s ease-in-out' }}>
        {children}
      </main>
      </body>
    </html>
  );
};

export default RootLayout;