/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import React from "react";
const stats = [
  {
    name: "GIA 123325234 1.05 ct gVS2",
    stat: "$10,832",
    previousStat: "$10,000",
    change: "12%",
    changeType: "decrease",
  },
  {
    name: "GIA 123325234 1.05 ct gVS2",
    stat: "$10,832",
    previousStat: "$10,000",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "GIA 123325234 1.05 ct gVS2",
    stat: "$10,832",
    previousStat: "$10,900",
    change: "4.05%",
    changeType: "decrease",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Alerts: React.FC = () => {
  return (
    <div className="bg-white shadow-md">
      <h3 className=" pt-4 pl-4 pb-4 leadin-6 text-base leading-6 font-semibold text-gray-600 uppercase tracking-wide">
        Price Alerts
      </h3>
      <dl
        className="mt-0 grid grid-cols-1 bg-white overflow-hidden 
       shadow divide-y divide-gray-200 lg:grid-cols-2 xl:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-4 md:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-base lg:text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from {item.previousStat}
                </span>
              </div>

              <div
                className={classNames(
                  item.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                )}>
                {item.changeType === "increase" ? (
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
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Alerts;
