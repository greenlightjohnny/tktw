import React from "react";
import { Link } from "react-router-dom";

const PriceAlerts = () => {
  return (
    <div>
      <h4 className="text-black font-bold ml-4 mt-8">Your Appointments</h4>
      <div className="grey-border w-full ml-4">
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="">
            <button className="py-2 px-5 bg-red-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center w-36 text-center justify-center">
              Confirm App
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="text-center">
            <button className="py-2 px-5 bg-gray-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center w-36 text-center justify-center">
              Pending
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="">
            <button className="py-2 px-5 bg-blue-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center w-36 text-center justify-center">
              View Details
            </button>
          </div>
        </div>
        <Link to="/" className="mt-8 block text-center">
          More
        </Link>
      </div>
    </div>
  );
};

export default PriceAlerts;
