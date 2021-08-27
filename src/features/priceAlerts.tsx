import React from "react";
import { Link } from "react-router-dom";

const PriceAlerts = () => {
  return (
    <div>
      <h4 className="text-black font-bold md:ml-4 mt-8">Your Price Alerts</h4>
      <div className="grey-border w-full md:ml-4 text-sm sm:text-base">
        <div className="grey-border-inner pl-2 pr-2 pt-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex flex-col pl-2">
            <p>GIA 123325234</p>
            <p>1.05 ct gVS2</p>
          </div>
          <div className="flex flex-col pl-2 ">
            <p>Alert: $10,832</p>
            <p>
              Current Price:{" "}
              <span
                className="inline-flex items-baseline
               px-2.5 py-0.5 rounded-full  font-medium
               leading-5 md:mt-2 lg:mt-0
                bg-red-100 text-red-800">
                $10,800
              </span>
            </p>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex flex-col pl-2">
            <p>GIA 123325234</p>
            <p>1.05 ct gVS2</p>
          </div>
          <div className="flex flex-col pl-2 ">
            <p>Alert: $10,832</p>
            <p>
              Current Price:{" "}
              <span
                className="inline-flex items-baseline 
              px-2.5 py-0.5 rounded-full  font-medium
              leading-5 md:mt-2 lg:mt-0  bg-green-100
              text-green-800">
                $10,800
              </span>
            </p>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex flex-col pl-2">
            <p>GIA 123325234</p>
            <p>1.05 ct gVS2</p>
          </div>
          <div className="flex flex-col pl-2">
            <p>Alert: $10,832</p>
            <p>
              Current Price:{" "}
              <span
                className="inline-flex items-baseline 
              px-2.5 py-0.5 rounded-full  font-medium
              leading-5 md:mt-2 lg:mt-0  bg-red-100 text-red-800">
                $10,800
              </span>
            </p>
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
  );
};

export default PriceAlerts;
