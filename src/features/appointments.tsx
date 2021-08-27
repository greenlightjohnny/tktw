import React from "react";
import { Link } from "react-router-dom";

const Appointments = () => {
  return (
    <div className="flex flex-col flex-grow md:mr-4">
      <h4 className="text-black font-bold md:ml-4 mt-8">Your Appointments</h4>
      <div className="grey-border w-full md:ml-4 ">
        <div className="grey-border-inner pl-2 pr-2 sm:pl-4 sm:pr-4 pt-2 pb-2 bg-white">
          <div className="flex flex-col text-sm sm:text-base">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="flex  items-center">
            <button
              className="py-2 px-3 sm:px-5 bg-red-400 
            rounded-md text-white text-sm sm:text-base hover:bg-red-500
            transition duration-300 ease-in-out
            flex items-center w-36 sm:w-36 text-center
            justify-center">
              Confirm App
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 sm:pl-4 sm:pr-4 pt-2 pb-2 bg-white sm:text-base">
          <div className="flex flex-col text-sm sm:text-base">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="flex items-center">
            <button
              className="py-2 px-3 sm:px-5 bg-gray-500 
            rounded-md text-white text-sm sm:text-base hover:bg-red-300
            transition duration-300 ease-in-out flex items-center
             w-36 sm:w-36 text-center justify-center">
              Pending
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 sm:pl-4 sm:pr-4 pt-2 pb-2 justify-between flex-grow bg-white">
          <div className="flex flex-col text-sm sm:text-base">
            <p>Campbell Jewelers</p>
            <p>Today: August 2021; 1:00PM</p>
          </div>
          <div className="pl-6 flex items-center">
            <button
              className="py-2 px-3 sm:px-5 bg-gradient-to-r text-sm sm:text-base
            from-purple-600 to-indigo-600 hover:from-purple-700
            hover:to-indigo-700 rounded-md text-white   
            transition duration-300 ease-in-out
            flex items-center w-36 sm:w-35 text-center justify-center">
              View Details
            </button>
          </div>
        </div>
        <Link to="/" className="mt-8 mb-4 block text-center">
          <span
            id="sa-fair_price_title"
            className="inline-flex px-4 py-1 rounded-full
             text-sm leading-5 font-semibold tracking-wide
             bg-indigo-100 text-indigo-600">
            More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Appointments;
