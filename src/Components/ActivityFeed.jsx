// src/components/ActivityFeed.js
import React from 'react';
import '../styles/ActivityFeed.css';

const barData = [
  { label: 'Mon', height: 30 },
  { label: 'Tue', height: 60 },
  { label: 'Wed', height: 40 },
  { label: 'Thu', height: 80 },
  { label: 'Fri', height: 20 },
  { label: 'Sat', height: 50 },
  { label: 'Sun', height: 30 },
];

const ActivityFeed = () => {
  return (
    <div className="activity-card">
      <h3 className="activity-title">Activity</h3>
      <p className="activity-subtitle">3 appointments this week</p>
      <div className="bar-chart">
        {barData.map((bar, idx) => (
          <div className="bar-item" key={idx}>
            <div
              className="bar"
              style={{ height: `${bar.height}px` }}
              title={`${bar.label}: ${bar.height}px`}
            />
            <span className="bar-label">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
