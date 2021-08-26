import React from "react";

const Notifications = () => {
  return (
    <>
      <h4 className="text-black font-bold ml-4 mt-8">Your Notifcations</h4>
      <div className="border-solid border-2 border-gray-500 rounded-md border-opacity-30 flex flex-col ml-4 mr-4 w-full">
        <div className="border-solid border-2 border-gray-500 border-opacity-30 ml-2 mr-2 mt-4 mb-4">
          <div className="">
            <p>
              Cambell Jewelers would like to reschedule thier appointment for
              8/18
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
