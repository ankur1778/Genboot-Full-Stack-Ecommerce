import React from "react";

const ProductCarousel = ({ products }) => {
  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
        "slidesQty": {
          "xs": 1,
          "lg": 3
        }
      }'
      className="relative mt-10"
    >
      <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div className="min-h-72 -mx-1">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-100 transition-transform duration-700">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="hs-carousel-slide px-1">
                  <div className="mt-1 ml-5 mr-2 px-5 py-5 bg-white max-w-xs border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-48 h-48 rounded-lg mx-auto"
                    />
                    <div className="p-5">
                      <h3 className="text-sm tracking-tight text-gray-900 dark:text-white font-bold mt-5 text-truncate">
                        {product.name}
                      </h3>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <div role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
      </button>
      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
    </div>
  );
};

export default ProductCarousel;
