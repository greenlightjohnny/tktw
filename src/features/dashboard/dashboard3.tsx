import React from "react";
import Notifications from "./components2/notifications3";
import Feed from "./components2/notifications";
import Alert from "../../features/priceAlerts/alerts2";
import Appointments from "../../features/appointments/appointments";
import RecentDiamonds from "../../features/recentDiamonds/recentDiamonds";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className=" flex flex-grow-1 flex-row lg:flex-row justify-between">
        <Notifications />
      </div>
      <div className="">
        <Alert />
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <Appointments />
        <RecentDiamonds />
      </div>
    </>
  );
};

export default Dashboard;
