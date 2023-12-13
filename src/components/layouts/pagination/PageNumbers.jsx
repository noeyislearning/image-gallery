import React from 'react';

function PageNumbers({ currentPage, totalPages, goToPage }) {
  const renderPageNumbers = () => {
    const pagesToDisplay = [];
    const maxPagesToShow = 5; // Number of page numbers to display

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pagesToDisplay.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === i ? 'bg-gray-400' : 'bg-gray-200'
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = 1;
      if (currentPage > 3) {
        startPage = currentPage - 2;
        pagesToDisplay.push(
          <button key={1} onClick={() => goToPage(1)} className="px-3 py-1 mx-1 rounded border border-dashed border-gray-300">
            1
          </button>
        );
        pagesToDisplay.push(
          <span key="startEllipsis" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      }

      for (let i = startPage; i <= currentPage + 2 && i <= totalPages; i++) {
        pagesToDisplay.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`px-3 py-1 mx-1 rounded border border-dashed ${
              currentPage === i ? 'border-black' : 'border-gray-300'
            }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage + 2 < totalPages) {
        pagesToDisplay.push(
          <span key="endEllipsis" className="px-3 py-1 mx-1">
            ...
          </span>
        );
        pagesToDisplay.push(
          <button
            key={totalPages}
            onClick={() => goToPage(totalPages)}
            className="px-3 py-1 mx-1 rounded border border-dashed border-gray-300"
          >
            {totalPages}
          </button>
        );
      }
    }

    return pagesToDisplay;
  };

  return (
    <React.Fragment>
      {renderPageNumbers()}
    </React.Fragment>
  );
}

export default PageNumbers;
