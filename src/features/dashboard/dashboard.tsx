import React from "react";
import Notifications from "./components/notifications3";
import Feed from "./components/notifications";
import Alert from "../priceAlerts/alerts2";
import Appointments from "../appointments/appointments";
import RecentDiamonds from "../recentDiamonds/recentDiamonds";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className=" flex flex-grow-1 flex-row lg:flex-row justify-between">
        <Notifications />
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <Feed />
        <Appointments />
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <RecentDiamonds />
        <RecentDiamonds />
      </div>
      <div className="">
        <Alert />
      </div>
    </>
  );
};

export default Dashboard;
