import React from "react";
import Diamond from "../../images/diamond.jpg";

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
    caret: "4.62",
  },
  // More products...
];

const SaveDiamonds: React.FC = () => {
  return (
    <div className="flex-1 bg-white mr-0 lg:mr-8">
      <div className="max-w-2xl mx-auto  px-4 py-0  lg:max-w-7xl pb-0 shadow-md">
        <h2 className=" pt-4  pb-4 leadin-6 text-base leading-6 font-semibold text-gray-600 uppercase tracking-wide">
          Saved Diamonds
        </h2>

        <div className="mt-2 grid grid-cols-1 gap-y-12  sm:gap-x-6  xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={Diamond}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-row justify-between">
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-blue-800">
                      {product.caret}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Visual Carat</p>
                  </div>

                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-blue-900">1</h3>
                    <p className="mt-1 text-sm text-gray-500">L/W Ratio</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <div>
                    <h3 className="text-sm font-medium text-blue-900">
                      5.01/F/VS1
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      134 days on StoneAlgo
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View
                  </button>
                  <div>
                    <h3 className="text-sm font-medium text-blue-900">
                      $333,000
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Price History</p>
                  </div>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>

              {/* <div className="mt-6 flex justify-between">
                 <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a> 
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Previous
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Details
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Next
                </button>
              </div> */}
            </div>
          ))}
          <nav
            className="bg-white  py-3 flex items-center justify-between border-t border-gray-200"
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
  );
};

export default SaveDiamonds;
