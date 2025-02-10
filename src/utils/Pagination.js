import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-8 px-4">
      <button
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 text-white hover:bg-gray-800"
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 text-white hover:bg-gray-800"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
