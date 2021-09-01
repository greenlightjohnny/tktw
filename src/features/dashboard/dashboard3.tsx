import React from "react";
import Notifications from "./components2/notifications3";
import Feed from "./components2/notifications";
import Alert from "../../features/priceAlerts/alerts";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row justify-between">
        <Feed />
        <Notifications />
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <Alert />
        <Alert />
      </div>
    </>
  );
};

export default Dashboard;
