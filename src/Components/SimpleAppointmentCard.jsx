// src/components/SimpleAppointmentCard.js
import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon, color }) => {
  return (
    <div className="appointment-card-simple">
      <div className="icon-box" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div>
        <p className="card-title">{title}</p>
        <p className="card-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
