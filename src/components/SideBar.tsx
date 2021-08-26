import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-screen w-48">
      <nav
        className="flex  flex-col mt-24 border-r-4 border-gray-500"
        role="navigation">
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out mt-4"
          to="/">
          Notifcations
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out mt-2"
          to="/menu">
          Appointments
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out mt-2"
          to="/about">
          Price Alerts
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out mt-2"
          to="/contact">
          Saved Diamonds
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out mt-2"
          to="/about">
          Recent Searches
        </Link>
        <Link
          className="text-base font-medium text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out mt-2"
          to="/contact">
          Settings/Preferences
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
