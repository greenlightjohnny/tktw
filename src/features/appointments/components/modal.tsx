import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/solid";
import TimePicker from "./timePicker";

// type OwnProps = {
//   open: boolean
// }

// type props = OwnProps

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
    color: "bg-red-400 text-black font-medium",
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
    color: "bg-gray-200 text-black",
  },
  {
    id: 3,
    name: "Campbell Jewelers",
    href: "#",
    time: "3:00PM",
    dateof: "9/21/2021",
    status: "View",
    date: "July 11, 2020",
    datetime: "2020-07-11",
    color: "bg-indigo-400 text-black",
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const showModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(true);
  };
  const showTimeModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpenTime(true);
  };

  const cancelButtonRef = useRef(null);

  return (
    <>
      {transactions.map((transaction) => (
        <tr key={transaction.id} className="bg-white">
          <td className="  px-2 py-2 laptop899:px-6 laptop899:py-3 whitespace-nowrap text-sm text-gray-900">
            <div className="flex">
              <a
                href={transaction.href}
                onClick={(e) => showModal(e)}
                className="group inline-flex space-x-2 truncate text-sm">
                <CalendarIcon
                  className="flex-shrink-0 h-5 w-5 hidden sm:block text-blue-900 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <p className="text-gray-500  group-hover:text-gray-900">
                  {transaction.name}
                </p>
              </a>
            </div>
          </td>

          <td className="px-2 py-2 laptop899:px-6 laptop899:py-3 text-left whitespace-nowrap text-sm text-gray-500">
            {/* <span className="text-blue-900 font-medium">
                          {transaction.amount}{" "}
                        </span> */}

            <span className="text-blue-600 font-bold">
              {transaction.dateof}
            </span>
          </td>
          <td className="px-2 py-2 laptop899:px-6 laptop899:py-3 text-left whitespace-nowrap text-sm text-gray-500">
            <time dateTime={transaction.datetime}>{transaction.time}</time>
          </td>
          <td className=" px-2 py-2 laptop899:px-6 laptop899:py-3 whitespace-nowrap text-right text-sm text-gray-500">
            {/* <span
                          className={classNames(
                            // statusStyles[transaction.status],
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                          )}>
                          {transaction.status}
                        </span> */}
            <button
              type="button"
              onClick={(e) => showTimeModal(e)}
              className={classNames(
                transaction.color,
                "w-20 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}>
              {transaction.status}
            </button>
          </td>
        </tr>
      ))}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}>
          <div
            className="flex items-end justify-center 
          min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div
                className="inline-block 
              align-bottom bg-white rounded-lg
              px-4 pt-5 pb-4 text-left
              overflow-hidden shadow-xl
              transform transition-all sm:my-8
              sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div
                    className="mx-auto flex items-center 
                  justify-center h-12 w-12 rounded-full bg-red-100">
                    <ExclamationCircleIcon
                      className="h-6 w-6 text-red-900"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900">
                      Schedule Change
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Cambpell Jewelers is not available for the time you
                        booked, they have suggested other times.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex 
                    justify-center rounded-md border 
                    border-transparent shadow-sm px-4 py-2 
                    bg-indigo-600 text-base font-medium 
                    text-white hover:bg-indigo-700 
                    focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500 
                    sm:col-start-2 sm:text-sm"
                    onClick={() => setOpen(false)}>
                    Change
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex
                     justify-center rounded-md border
                      border-gray-300 shadow-sm px-4 py-2 
                      bg-white text-base font-medium text-gray-700 
                      hover:bg-gray-50 focus:outline-none focus:ring-2 
                      focus:ring-offset-2 
                      focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}>
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Time Picker*/}

      <Transition.Root show={openTime} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenTime}>
          <div
            className="flex items-end 
          justify-center min-h-screen pt-4 px-4
          pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div
                className="inline-block 
              align-bottom bg-white
              rounded-lg px-4 pt-5 pb-4
              text-left overflow-hidden shadow-xl
              transform transition-all sm:my-8
              sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div
                    className="mx-auto flex items-center 
                  justify-center h-12 w-12 rounded-full bg-red-100">
                    <ExclamationCircleIcon
                      className="h-6 w-6 text-red-900"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900">
                      Schedule Change
                    </Dialog.Title>
                    <TimePicker />
                  </div>
                </div>
                <div
                  className="mt-5 sm:mt-6 sm:grid 
                sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center 
                    rounded-md border border-transparent 
                    shadow-sm px-4 py-2 bg-indigo-600 text-base
                     font-medium text-white hover:bg-indigo-700 
                     focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-indigo-500 
                     sm:col-start-2 sm:text-sm"
                    onClick={() => setOpenTime(false)}>
                    Change
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex 
                    justify-center rounded-md border
                     border-gray-300 shadow-sm px-4 
                     py-2 bg-white text-base font-medium 
                     text-gray-700 hover:bg-gray-50
                      focus:outline-none focus:ring-2 
                      focus:ring-offset-2
                       focus:ring-indigo-500 
                       sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpenTime(false)}
                    ref={cancelButtonRef}>
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Modal;
