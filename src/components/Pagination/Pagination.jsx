import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="pagination-container">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className="pagination-button"
          onClick={() => setCurrentPage(i + 1)}
          disabled={currentPage === i + 1}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
