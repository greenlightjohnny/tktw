import React from "react";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <>
      <h4 className="text-black font-bold ml-4 mt-8">Your Notifcations</h4>
      <div className="border-solid border-2 border-gray-500 rounded-md border-opacity-30 flex flex-col justify-between ml-4">
        <div className=" flex flex-row justify-between border-solid border-2 border-gray-500 border-opacity-30 ml-2 mr-2 mt-4">
          <div className="flex flex-row pl-2 pt-1 pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="pl-2">
              Cambell Jewelers would like to reschedule their appointment for
              8/18
            </p>
          </div>
          <div className="flex flex-row pr-2 pt-1 pb-1">
            <Link to="/" className="pr-2 text-indigo-600">
              Learn More
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-row justify-between border-solid border-2 border-gray-500 border-opacity-30 ml-2 mr-2 mt-4 mb-4">
          <div className="flex flex-row pl-2 pt-1 pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="pl-2">
              Price Alert: GIA 12353455 has a current price of $10,888 below
              your alert level of $10,832
            </p>
          </div>
          <div className="flex flex-row pr-2 pt-1 pb-1">
            <Link to="/" className="pr-2 text-indigo-600">
              Learn More
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
