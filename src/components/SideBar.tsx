import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-screen w-40">
      <nav className="flex  flex-col mt-24" role="navigation">
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out"
          to="/">
          Notifcations
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out"
          to="/menu">
          Appointments
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out"
          to="/about">
          Price Alerts
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out"
          to="/contact">
          Saved Diamonds
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
