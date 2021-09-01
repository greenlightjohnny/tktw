import React from "react";
import Notifications from "./components2/notifications3";
import Feed from "./components2/notifications";
import Alert from "../../features/priceAlerts/alerts2";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row justify-between">
        <Feed />
        <Notifications />
      </div>
      <div className="">
        <Alert />
      </div>
    </>
  );
};

export default Dashboard;
