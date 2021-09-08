import React, { useState } from "react";
import Modal from "./components/modal";
import { CalendarIcon } from "@heroicons/react/solid";
import TimePicker from "./components/timePicker";

const transactions = [
  {
    id: 1,
    name: "Campbell Jewelers",
    href: "#",
    time: "2:00PM",
    dateof: "10/3/2021",
    status: "Confirm",
    date: "July 11, 2020",
    datetime: "2020-07-11",
    color: "bg-red-200 text-black",
  },
  {
    id: 2,
    name: "Campbell Jewelers",
    href: "#",
    time: "1:00PM",
    dateof: "8/19/2021",
    status: "Pending",
    date: "July 11, 2020",
    datetime: "2020-07-11",
    color: "bg-gray-100 text-black",
  },
  {
    id: 1,
    name: "Campbell Jewelers",
    href: "#",
    time: "3:00PM",
    datof: "9/20/2021",
    status: "View",
    date: "July 11, 2020",
    datetime: "2020-07-11",
    color: "bg-indigo-200 text-gray-800",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-indigo-100 text-gray-800",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Appointments: React.FC = () => {
  const [open, setOpen] = useState(true);

  const showModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="relative  flex flex-col   mb-10">
      <h2
        className="mb-0 px-0 pl-4 
      text-base bg-indigo-700 pt-4 pb-4
      leading-6 font-semibold text-white
      uppercase tracking-wide ">
        Appointments
      </h2>

      {/* Activity list (smallest breakpoint only) */}
      <div className=" shadow-md sm:hidden">
        <ul
          role="list"
          className="mt-0 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block px-4 py-4  bg-white hover:bg-gray-50">
                <span className="flex items-center space-x-4">
                  <span className="flex-1 flex space-x-2 truncate">
                    <CalendarIcon
                      className="flex-shrink-0 h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col text-gray-500 text-sm truncate">
                      <span className="truncate">{transaction.name}</span>
                      <span className="text-gray-900 font-medium">
                        {/* <span className="text-gray-900 font-medium">
                          {transaction.amount}
                        </span>{" "} */}
                        {transaction.dateof}
                      </span>
                      <time dateTime={transaction.datetime}>
                        {transaction.time}
                      </time>
                    </span>
                  </span>
                  {/* <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                  <button
                    type="button"
                    className={classNames(
                      transaction.color,
                      "w-20 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}>
                    {transaction.status}
                  </button>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <nav
          className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
          aria-label="Pagination">
          <div className="flex-1 flex justify-between">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
              Previous
            </a>
            <a
              href="#"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
              Next
            </a>
          </div>
        </nav>
      </div>

      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block shadow-md bg-white">
        <div className=" mx-auto px-0 sm:px-0 lg:px-0 ">
          <div className="flex flex-col mt-2 ">
            <div className="align-middle min-w-full overflow-x-auto overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th className="px-6 py-3 md:px-  text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3  text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className=" px-6 py-3  text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3  text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <Modal />
                </tbody>
              </table>
              {/* Pagination */}
              <TimePicker />
              <nav
                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                aria-label="Pagination">
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">3</span> of{" "}
                    <span className="font-medium">3</span> results
                  </p>
                </div>
                <div className="flex-1 flex justify-between sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
