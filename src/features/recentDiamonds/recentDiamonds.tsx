/* This example requires Tailwind CSS v2.0+ */
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CheckCircleIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import React from "react";
const people = [
  {
    name: "GIA 123325234",
    handle: "1.05 ct gVS2",
    price: "$100",
    changeType: "increase",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "GIA 123325234",
    handle: "1.05 ct gVS2",
    price: "$100",
    changeType: "decrease",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "GIA 123325234",
    handle: "1.05 ct gVS2",
    price: "$100",
    changeType: "increase",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "GIA 123325234",
    handle: "1.05 ct gVS2",
    price: "$300",
    changeType: "decrease",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const RecentDiamonds: React.FC = () => {
  return (
    <div className=" flex-1 mt-0  flex-1 mb-10">
      <h3 className=" pt-4 pl-4 pb-0 leadin-6 bg-white text-base leading-6 font-semibold text-gray-600 uppercase tracking-wide">
        Recent Diamonds
      </h3>
      <div className="bg-white  pt-6 pr-4 pl-4 pb-4 shadow-md">
        <div className="flow-root  ">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {people.map((person) => (
              <li key={person.handle} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <GlobeIcon
                      className="h-7 w-7 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {person.name}
                    </p>
                    <div className="flex flex-col md:flex-row">
                      <p className="text-sm text-gray-500 truncate pr-2">
                        {person.handle}
                      </p>
                      <div
                        className={classNames(
                          person.changeType === "increase"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800",
                          "inline-flex items-baseline px-2.5  rounded-full text-sm font-medium "
                        )}>
                        {person.changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}

                        <span className="sr-only">
                          {person.changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span>
                        {person.price}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentDiamonds;
