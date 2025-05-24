// src/components/DashboardMain.js
import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMain.css';

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="top-section">
        <DashboardOverview />
        <CalendarView />
      </div>
      <div className="bottom-section">
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMain;
