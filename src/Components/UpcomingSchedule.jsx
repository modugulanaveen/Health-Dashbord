// src/components/UpcomingSchedule.js
import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

const schedule = [
  {
    day: 'On Thursday',
    items: [
      { title: 'Ophthalmologist', time: '14:00', icon: '👁️', color: '#2196F3' },
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️', color: '#f44336' },
    ],
  },
  {
    day: 'On Saturday',
    items: [
      { title: 'Neurologist', time: '10:30 AM', icon: '🧠', color: '#9c27b0' },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-card">
      <h3 className="upcoming-title">The Upcoming Schedule</h3>
      {schedule.map((block, idx) => (
        <div key={idx} className="day-block">
          <p className="day-label">{block.day}</p>
          <div className="card-list">
            {block.items.map((item, i) => (
              <SimpleAppointmentCard
                key={i}
                title={item.title}
                time={item.time}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
