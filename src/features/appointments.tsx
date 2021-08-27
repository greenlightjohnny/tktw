import React from "react";
import { Link } from "react-router-dom";

const Appointments = () => {
  return (
    <div className="flex flex-col flex-grow mr-4">
      <h4 className="text-black font-bold ml-4 mt-8">Your Appointments</h4>
      <div className="grey-border w-full ml-4">
        <div className="grey-border-inner pl-4 pr-4 pt-2 pb-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="flex  items-center">
            <button className="py-2 px-5 bg-red-400 rounded-md text-white  hover:bg-red-500 transition duration-300 ease-in-out flex items-center w-36 text-center justify-center">
              Confirm App
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-4 pr-4 pt-2 pb-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="flex items-center">
            <button className="py-2 px-5 bg-gray-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center w-36 text-center justify-center">
              Pending
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-4 pr-4 pt-2 pb-2 justify-between flex-grow">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="pl-6 flex-item-center">
            <button className="py-2 px-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-md text-white   transition duration-300 ease-in-out flex items-center w-36 text-center justify-center">
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

export default Appointments;
