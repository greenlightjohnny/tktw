import React from "react";
import { Link } from "react-router-dom";

const Appointments = () => {
  return (
    <div className="flex flex-col flex-grow md:mr-4">
      <h4 className="text-black font-bold md:ml-4 mt-8">Your Appointments</h4>
      <div className="grey-border w-full md:ml-4 ">
        <div
          className="grey-border-inner pl-2 pr-2 
        sm:pl-4 sm:pr-4 pt-2 pb-2 bg-white">
          <div className="flex flex-col text-sm sm:text-base">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="flex items-center">
            <button
              className="app-btn bg-red-400 
             hover:bg-red-500">
              Confirm App
            </button>
          </div>
        </div>
        <div className="grey-border-inner-v2">
          <div className="flex flex-col text-sm sm:text-base">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="flex items-center">
            <button
              className="app-btn bg-gray-500 
             hover:bg-red-300">
              Pending
            </button>
          </div>
        </div>
        <div className="grey-border-inner-v2">
          <div className="flex flex-col text-sm sm:text-base">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="pl-6 flex items-center">
            <button className="app-btn purple-btn">View Details</button>
          </div>
        </div>
        <Link to="/" className="mt-8 mb-4 block text-center">
          <span id="sa-fair_price_title" className="more-btn">
            More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Appointments;
