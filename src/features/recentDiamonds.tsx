import React from "react";
import { Link } from "react-router-dom";

const RecentDiamonds = () => {
  return (
    <div>
      <div>
        <h4 className="text-black font-bold md:ml-4 mt-8">
          Your Recent Diamonds
        </h4>
        <div className="grey-border w-full md:ml-4 text-sm sm:text-base">
          <div className="grey-border-inner pl-2 pr-2 pt-2 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col pl-2">
              <p>GIA 123325234</p>
              <p>1.05 ct gVS2</p>
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
          <div className="grey-border-inner pl-2 pr-2 pt-2 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col pl-2">
              <p>GIA 123325234</p>
              <p>1.05 ct gVS2</p>
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
          <div className="grey-border-inner pl-2 pr-2 pt-2 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col pl-2">
              <p>GIA 123325234</p>
              <p>1.05 ct gVS2</p>
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
              className="inline-flex px-4 py-1 
            rounded-full text-sm leading-5
            font-semibold tracking-wide
            bg-indigo-100 text-indigo-600">
              More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentDiamonds;
