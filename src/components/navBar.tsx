export {};
// import React, { useCallback, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import useOnClickOutside from "../util/clickOutv2";

// const NavBar: React.FC = () => {
//   const [visible, setVisible] = useState(false);

//   const showMenu = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ): void => {
//     e.preventDefault();
//     setVisible(!visible);
//   };
//   const ref = useRef<HTMLDivElement>(null);
//   const refTwo = useRef<HTMLDivElement>(null);

//   const onClickOutsideDropdown = useCallback((e) => {
//     if (ref.current?.contains(e.target) || refTwo.current?.contains(e.target)) {
//       return;
//     }
//     setVisible(false);
//   }, []);

//   //useOnClickOutside(ref, () => setVisible(false));
//   useOnClickOutside(ref, onClickOutsideDropdown);

//   return (
//     <nav
//       className="flex justify-between items-center
//        h-16 bg-white text-black relative shadow-sm
//        font-mono mx-auto mt-4 border-solid
//         border-2 border-gray-500 rounded-md
//         border-opacity-30 max-w-screen-2xl"
//       role="navigation">
//       <Link
//         to="/"
//         className="pl-8 text-base font-medium
//          text-gray-500 hover:text-gray-900
//           transition duration-150 ease-in-out">
//         Stone Algo
//       </Link>

//       <div className="mr-2 -my-2 lg:hidden">
//         <button
//           type="button"
//           className="bg-white rounded-md
//         p-2 inline-flex items-center justify-center
//         text-gray-400 hover:text-gray-500
//         hover:bg-gray-100 focus:outline-none
//         focus:ring-2 focus:ring-inset
//         focus:ring-indigo-500"
//           onClick={showMenu}>
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>

//       <div
//         id="sa-mobile_menu_holder"
//         ref={ref}
//         className={
//           "absolute z-30 -top-1 -left-1 -right-1  shadow-sm  transition-all duration-500 ease-in-out border-solid border-opacity-0 border-2  rounded-md   border-gray-500 max-h-0 overflow-hidden rounded-md lg:hidden " +
//           (visible ? "block max-h-screen border-opacity-30" : "")
//         }>
//         <div
//           className="rounded-lg shadow-lg ring-1
//            ring-black ring-opacity-5 bg-white
//            divide-y-2 divide-gray-50">
//           <div className="h-16">
//             <div className="flex items-center justify-end h-16">
//               {/* <div>
//                 <img className="h-8 w-auto sm:h-10"
//                   style="border-radius: 4px;"
//                   src="/static/dist/img/marketing_logo.jpg" alt="">
//                 </div> */}
//               <div className="mr-2">
//                 <button
//                   onClick={(e) => showMenu(e)}
//                   id="sa-btn_close"
//                   type="button"
//                   className="bg-white rounded-md
//                   p-2 inline-flex items-center
//                    justify-center text-gray-400
//                     hover:text-gray-500 hover:bg-gray-100
//                     focus:outline-none focus:ring-2
//                     focus:ring-inset focus:ring-indigo-500">
//                   <span className="sr-only">Close menu</span>

//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="px-2 pt-2 pb-3">
//             <Link
//               to="/"
//               data-link_name="calculator"
//               className="dropdown-nav-link">
//               Calculate
//             </Link>
//             <Link to="/" data-link_name="search" className="dropdown-nav-link">
//               Search
//             </Link>
//             <Link
//               to="/"
//               data-link_name="free check"
//               className="dropdown-nav-link">
//               GIA Check
//             </Link>
//             <Link to="/" data-link_name="vault" className="dropdown-nav-link">
//               <span className="">Vault</span>
//             </Link>
//             <Link to="/" data-link_name="blog" className="dropdown-nav-link">
//               Learn
//             </Link>
//           </div>

//           <div id="sa-nav_mobile">
//             <div className="px-2 pt-2 pb-3">
//               <Link
//                 to="/"
//                 data-modal_open="true"
//                 data-modal_type="login"
//                 data-link_name="login"
//                 className="sa-home_nav_link
//                 block px-3 py-2 rounded-md text-base
//                 font-medium text-indigo-700 hover:text-indigi-900
//                  hover:bg-gray-50 focus:outline-none focus:text-indigo-900
//                   focus:bg-gray-50 transition duration-150 ease-in-out">
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="px-4 cursor-pointer md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </div> */}

//       <div className="hidden lg:flex space-x-10">
//         <Link
//           className="text-base font-medium
//            text-gray-500 hover:text-gray-900
//             transition duration-150 ease-in-out"
//           to="/">
//           Calculate
//         </Link>
//         <Link
//           className="text-base font-medium
//           text-gray-500 hover:text-gray-900
//            transition duration-150 ease-in-out"
//           to="/">
//           Search
//         </Link>
//         <Link
//           className="text-base font-medium
//            text-gray-500 hover:text-gray-900
//            transition duration-150 ease-in-out"
//           to="/">
//           GIA Check
//         </Link>
//         <Link
//           className="text-base font-medium
//            text-gray-500 hover:text-gray-900
//            transition duration-150 ease-in-out"
//           to="/">
//           Lab Grown
//         </Link>
//       </div>

//       <div className="hidden lg:flex space-x-10">
//         <Link
//           className="text-base font-medium
//            text-gray-500 hover:text-gray-900
//             transition duration-150 ease-in-out"
//           to="/">
//           Vault
//         </Link>
//         <Link
//           className="pr-8 text-base
//            font-medium text-gray-500
//             hover:text-gray-900 transition
//              duration-150 ease-in-out"
//           to="/">
//           My Account
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
