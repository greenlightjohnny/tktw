import React from "react";
import {
  CheckIcon,
  ThumbUpIcon,
  BellIcon,
  UserIcon,
  CheckCircleIcon,
  XIcon,
  ExclamationIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

const timeline = [
  {
    id: 1,
    content: " Cambell Jewelers would like to reschedule their appointment for",
    target: "10/18",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: BellIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content:
      "Price Alert: GIA 12353455 has a current price of $10,888 below your alert level of $10,832.",
    target: "More",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: BellIcon,
    iconBackground: "bg-blue-200",
  },
  {
    id: 3,
    content: "Cambell Jewelers would like to reschedule their appointment for",
    target: "10/18",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-300",
  },
  {
    id: 4,
    content:
      "Price Alert: GIA 12353455 has a current price of $10,888 below your alert level of $10,832",
    target: "More",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: BellIcon,
    iconBackground: "bg-blue-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NotificationsFull: React.FC = () => {
  return (
    <div className="flex-1  ml-0  mb-10  ">
      <h3
        className=" pt-4 pl-4 pb-4 bg-indigo-700 
      leadin-6 text-base leading-6 font-semibold
       text-white uppercase tracking-wide">
        Notifications
      </h3>
      <div
        className="flow-root border-solid bg-white    
    mr-0 lg:mr-0 mb-0">
        {/* <h3 className="mb-2 pl-2 pt-2 text-black-200 font-bold">Notifications</h3> */}
        <ul role="list" className="mb-0  shadow-md">
          <li>
            <div className=" bg-green-50 p-4  ">
              <div className="flex flex-1">
                <div className="flex-shrink-0">
                  <CheckCircleIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Cambell Jewelers would like to reschedule their appointment
                    for 10/18
                  </p>
                </div>
                <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      className="inline-flex bg-green-50 
                      rounded-md p-1.5 text-green-500 hover:bg-green-100
                      focus:outline-none focus:ring-2 focus:ring-offset-2
                       focus:ring-offset-green-50 focus:ring-green-600">
                      <span className="sr-only">Dismiss</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="rounded-md bg-yellow-50 p-4 mb-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Price Alert
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      GIA 12353455 has a current price of $10,888 below your
                      alert level of $10,832.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="rounded-md bg-red-50 p-4 mb-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Schedule Change
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <ul role="list" className="list-disc pl-5 space-y-1">
                      <li>Cambel Jewelers 9/05</li>
                      <li>Reschedule appointment request for 10/18</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className=" bg-blue-50 p-4 mb-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    GIA 12353455 has a current price of $10,888 below your alert
                    level of $10,832
                  </p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <a
                      href="#"
                      className="whitespace-nowrap font-medium
                       text-blue-700 hover:text-blue-600">
                      Details <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="bg-yellow-50 border-l-4 
            border-yellow-400 p-4 ">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Warning{" "}
                    <a
                      href="#"
                      className="font-medium underline
                       text-yellow-700 hover:text-yellow-600">
                      GIA 12353455 has a current price of $10,888 below your
                      alert level of $10,832
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationsFull;
