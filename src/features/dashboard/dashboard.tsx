import React from "react";
import Notifications from "../notifications/notifications3";
import Alert from "../priceAlerts/alerts2";
import RecentDiamonds from "../recentDiamonds/recentDiamonds";
import App2 from "../appointments/appointments";
import SavedDiamonds from "../savedDiamonds/savedDiamonds";

const Dashboard: React.FC = () => {
  return (
    <>
      <App2 />
      <Notifications />

      <div className="flex flex-col lg:flex-row justify-between">
        <SavedDiamonds />
        <RecentDiamonds />
      </div>
      <div className="mt-8">
        <Alert />
      </div>
    </>
  );
};

export default Dashboard;
