import Notifications from "./components/notifications";
import React from "react";
import Appointments from "./components/appointments";
import PriceAlerts from "./components/priceAlerts";
import SavedDiamonds from "./components/savedDiamonds";
import RecentDiamonds from "./components/recentDiamonds";

const Hero = () => {
  return (
    <>
      <Notifications />
      <div className="flex flex-col justify-between md:mr-4 laptop:flex-row mb-14">
        <Appointments />
        <PriceAlerts />
      </div>
      <div className="flex flex-col justify-between md:mr-4 laptop:flex-row mb-14">
        <SavedDiamonds />
        <RecentDiamonds />
      </div>
    </>
  );
};

export default Hero;
