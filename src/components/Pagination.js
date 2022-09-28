import React from "react";
import "./Pagination.css";
const Pagination = ({
  usersPerPage,
  totalUsers,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number, index) => (
        <button
          className={number == currentPage ? "active" : ""}
          key={index}
          onClick={() => {
            setCurrentPage(number);
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
