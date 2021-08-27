import React from "react";
import { Link } from "react-router-dom";

const PriceAlerts = () => {
  return (
    <div>
      <h4 className="text-black font-bold md:ml-4 mt-8">Your Price Alerts</h4>
      <div className="grey-border w-full md:ml-4">
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex flex-col pl-6">
            <p>GIA 123325234</p>
            <p>1.05 ct gVS2</p>
          </div>
          <div className="flex flex-col pl-6">
            <p>Alert: $10,832</p>
            <p>Current Price, $10,800</p>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex flex-col">
            <p>GIA 123325234</p>
            <p>1.05 ct gVS2</p>
          </div>
          <div className="flex flex-col">
            <p>Alert: $10,832</p>
            <p>Current Price, $10,800</p>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex flex-col">
            <p>GIA 123325234</p>
            <p>1.05 ct gVS2</p>
          </div>
          <div className="flex flex-col">
            <p>Alert: $10,832</p>
            <p>Current Price, $10,800</p>
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
