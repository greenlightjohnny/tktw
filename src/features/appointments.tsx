import React from "react";

const Appointments = () => {
  return (
    <>
      <h4 className="text-black font-bold ml-4 mt-8">Your Appointments</h4>
      <div className="grey-border w-full ml-4">
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="">
            <button className="py-2 px-5 bg-red-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center">
              Confirm App
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="">
            <button className="py-2 px-5 bg-red-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center">
              Confirm App
            </button>
          </div>
        </div>
        <div className="grey-border-inner pl-2 pr-2 pt-2">
          <div className="flex flex-col">
            <p>Campbell Jewelers</p>
            <p>8/18/2021; 1:00PM</p>
          </div>
          <div className="">
            <button className="py-2 px-5 bg-red-500 rounded-md text-white  hover:bg-red-300 transition duration-300 ease-in-out flex items-center">
              Confirm App
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
