import Notifications from "../features/notifications";
import React from "react";
import Appointments from "../features/appointments";
import PriceAlerts from "../features/priceAlerts";
import SavedDiamonds from "../features/savedDiamonds";
import RecentDiamonds from "../features/recentDiamonds";

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
