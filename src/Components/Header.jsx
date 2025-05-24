// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-title">Healthcare.</h1>
        <input type="text" className="search-bar" placeholder="Search..." disabled />
      </div>
      <div className="header-right">
        <span className="notification">🔔</span>
        <div className="profile">
          <img
            src="https://i.pravatar.cc/32"
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">Naveen</span>
        </div>
        <button className="add-btn">＋</button>
      </div>
    </header>
  );
};

export default Header;
