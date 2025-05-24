// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const navItems = [
  { icon: '🏠', label: 'Dashboard' },
  { icon: '🕘', label: 'History' },
  { icon: '📅', label: 'Calendar' },
  { icon: '📋', label: 'Appointments' },
  { icon: '📈', label: 'Statistics' },
  { icon: '💬', label: 'Chat' },
  { icon: '🛠', label: 'Support' },
  { icon: '⚙️', label: 'Setting' },
];


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">
        Health<span>care.</span>
      </h2>
      <div className="section-title">General</div>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>

          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
