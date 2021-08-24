import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Hero />
//         <Footer />
//       </BrowserRouter>
//     </>
//     // <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
//     //   <div className="sm:flex sm:items-center px-6 py-4">
//     //     <img
//     //       className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
//     //       src="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_960_720.jpg"
//     //       alt=""
//     //     />
//     //     <div className="text-center sm:text-left sm:flex-grow">
//     //       <div className="mb-4">
//     //         <p className="text-xl leading-tight">Testing</p>
//     //         <p className="text-sm leading-tight text-grey-dark">More testing</p>
//     //       </div>
//     //       <div>
//     //         <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
//     //           Button
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
