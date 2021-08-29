import React from "react";
import { Link } from "react-router-dom";

const Notifications: React.FC = () => {
  return (
    <>
      <h4 className="text-black font-bold md:ml-4 mt-8">Your Notifcations</h4>
      <div className="grey-border-v2">
        <div className="grey-border-inner">
          <div className="flex flex-row pl-2 pt-2 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="pl-2">
              Cambell Jewelers would like to reschedule their appointment for
              8/18
            </p>
          </div>
          <div
            className="flex flex-row pr-2
           pt-2 pb-4 sm:pb-2 ml-2 md:ml-0 flex-shrink-0
           flex-grow-0 items-center">
            <Link to="/" className="pr-2 text-indigo-600 pl-2">
              <span id="sa-fair_price_title" className="more-btn">
                Learn More
              </span>
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
        <div className="grey-border-inner mb-4">
          <div className="flex flex-row pl-2 pt-2 pb-2 flex-grow-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="pl-2 ">
              Price Alert: GIA 12353455 has a current price of $10,888 below
              your alert level of $10,832
            </p>
          </div>
          <div
            className="flex flex-row pr-2
            pt-2 pb-4 sm:pb-2 ml-2 md:ml-0 flex-shrink-0
            flex-grow-0 items-center">
            <Link to="/" className="pr-2 text-indigo-600 pl-2">
              <span id="sa-fair_price_title" className="more-btn">
                Learn More
              </span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600 "
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
