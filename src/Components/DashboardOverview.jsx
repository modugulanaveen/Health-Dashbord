// src/components/DashboardOverview.js
import React from 'react';
import '../styles/DashboardOverview.css';
import bodyImg from '../assets/human-body.png'; // Replace with actual path or use URL

const healthIndicators = [
  { label: 'Healthy Heart', color: '#4CAF50' },
  { label: 'Lungs', color: '#F44336' },
  { label: 'Teeth', color: '#FFC107' },
  { label: 'Bone', color: '#2196F3' },
];

const DashboardOverview = () => {
  return (
    <div className="overview-card">
      <h3 className="overview-title">Body Status</h3>
      <div className="overview-body">
        <img
          src={bodyImg}
          alt="Human Anatomy"
          className="body-image"
        />
        <div className="status-list">
          {healthIndicators.map((item, idx) => (
            <div key={idx} className="status-item">
              <span
                className="status-indicator"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
