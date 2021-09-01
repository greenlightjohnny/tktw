/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import {
  CheckIcon,
  ThumbUpIcon,
  BellIcon,
  UserIcon,
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

const Feeds: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg mb-2 leading-6 font-medium text-gray-900">
        Appointments
      </h3>

      <div
        className="flow-root  bg-white rounded-md  
   mr-0 lg:mr-8 mb-8 shadow-md">
        <ul role="list" className="mb-8 ">
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8 bg-white pr-2 lg:pr-4   ">
                {eventIdx !== timeline.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}>
                      <event.icon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div className="pr-4">
                      <p className="text-sm text-gray-500">
                        {event.content}{" "}
                        <a
                          href={event.href}
                          className="font-medium text-gray-900">
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feeds;
