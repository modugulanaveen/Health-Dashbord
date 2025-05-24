// src/components/CalendarView.js
import React from 'react';
import '../styles/CalendarView.css';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = [
  '', '', '', '', '1', '2', '3',
  '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17',
  '18', '19', '20', '21', '22', '23', '24',
  '25', '26', '27', '28', '29', '30', '31',
];

// Map of appointments for some dates
const appointments = {
  '5': '09:00',
  '10': '11:00',
  '15': '13:00',
  '20': '15:00',
};

const CalendarView = () => {
  return (
    <div className="calendar-card">
      <h3 className="calendar-title">October 2021</h3>
      <div className="calendar-grid">
        {days.map((day, idx) => (
          <div key={idx} className="calendar-day">{day}</div>
        ))}
        {dates.map((date, idx) => (
          <div key={idx} className="calendar-cell">
            {date && (
              <>
                <span className="calendar-date">{date}</span>
                {appointments[date] && (
                  <span className="calendar-time">{appointments[date]}</span>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-card dentist">
          <p>Dentist Appointment</p>
          <span>09:00 AM</span>
        </div>
        <div className="appointment-card physio">
          <p>Physiotherapy Appointment</p>
          <span>11:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
