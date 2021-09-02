import React from "react";
import Notifications from "./components/notifications3";
import Feed from "./components/notifications";
import Alert from "../priceAlerts/alerts2";
import Appointments from "../appointments/appointments";
import RecentDiamonds from "../recentDiamonds/recentDiamonds";
import App2 from "../appointments/app2";
import App3 from "../appointments/app3";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className=" flex flex-grow-1 flex-row lg:flex-row justify-between">
        <Notifications />
      </div>
      <div className="flex flex-col lg:flex-col ">
        <App2 />
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <Appointments />
        <RecentDiamonds />
      </div>
      <div className="mt-8">
        <Alert />
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-between">
        <RecentDiamonds />
        <RecentDiamonds />
      </div> */}
    </>
  );
};

export default Dashboard;
