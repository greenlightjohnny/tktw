import Notifications from "../features/notifications";
import React from "react";
import { Link } from "react-router-dom";
import Appointments from "../features/appointments";
import PriceAlerts from "../features/priceAlerts";

const Hero = () => {
  return (
    <>
      <Notifications />
      <div className="flex flex-col justify-between mr-4 laptop:flex-row">
        <Appointments />
        <PriceAlerts />
      </div>
    </>
    // <div className=" bg-white h-screen flex flex-col justify-center items-center">
    //   <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
    //     Main
    //   </h1>
    //   <Link
    //     to="/store"
    //     className="py-5 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
    //     Store{" "}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-6 w-6 ml-4"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor">
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //       />
    //     </svg>
    //   </Link>
    // </div>
  );
};

export default Hero;
