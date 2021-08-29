import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center
       h-16 bg-white text-black relative shadow-sm 
       font-mono mx-auto mt-4 border-solid
        border-2 border-gray-500 rounded-md 
        border-opacity-30 max-w-screen-2xl"
      role="navigation">
      <Link
        to="/"
        className="pl-8 text-base font-medium
         text-gray-500 hover:text-gray-900
          transition duration-150 ease-in-out">
        Stone Algo
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="hidden lg:flex space-x-10">
        <Link
          className="text-base font-medium
           text-gray-500 hover:text-gray-900
            transition duration-150 ease-in-out"
          to="/">
          Calculate
        </Link>
        <Link
          className="text-base font-medium 
          text-gray-500 hover:text-gray-900
           transition duration-150 ease-in-out"
          to="/">
          Search
        </Link>
        <Link
          className="text-base font-medium
           text-gray-500 hover:text-gray-900 
           transition duration-150 ease-in-out"
          to="/">
          GIA Check
        </Link>
        <Link
          className="text-base font-medium
           text-gray-500 hover:text-gray-900 
           transition duration-150 ease-in-out"
          to="/">
          Lab Grown
        </Link>
      </div>

      <div className="hidden lg:flex space-x-10">
        <Link
          className="text-base font-medium
           text-gray-500 hover:text-gray-900
            transition duration-150 ease-in-out"
          to="/">
          Vault
        </Link>
        <Link
          className="pr-8 text-base
           font-medium text-gray-500
            hover:text-gray-900 transition
             duration-150 ease-in-out"
          to="/">
          My Account
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
