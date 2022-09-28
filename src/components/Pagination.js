import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem" }}>
        {pageNumbers.map((number) => (
          <li key={number} style={{ listStyleType: "none" }}>
            <a
              onClick={() => {
                paginate(number);
              }}
              style={{ textDecoration: "none" }}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
