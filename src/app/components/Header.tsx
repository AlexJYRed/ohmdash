import React, { use } from 'react';

const Header = ({ username, onLogout, onToggleSidebar, sidebarOpen }) => {
    return (
      <header style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '10px 20px', 
          backgroundColor: '#333', 
          color: 'white'
      }}>
        <button 
          onClick={onToggleSidebar} 
          style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer', 
              fontSize: '24px', 
              transform: sidebarOpen ? 'translateX(250px)' : 'translateX(0)', 
              transition: 'transform 0.3s ease-in-out'
          }}
        >
          <div style={{ width: '35px', height: '5px', backgroundColor: 'white', margin: '6px 0', transition: '0.4s' }}></div>
          <div style={{ width: '35px', height: '5px', backgroundColor: 'white', margin: '6px 0', transition: '0.4s' }}></div>
          <div style={{ width: '35px', height: '5px', backgroundColor: 'white', margin: '6px 0', transition: '0.4s' }}></div>
        </button>
        <h3>OhmEV Dashboard - Welcome, {username}</h3>
        <button onClick={onLogout} className="logout-button" style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px'
        }}>Logout</button>
      </header>
    );
  };

export default Header;
