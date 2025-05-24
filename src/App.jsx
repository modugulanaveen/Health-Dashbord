
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMain from './components/DashboardMain';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMain />
      </div>
    </div>
  );
}

export default App;
