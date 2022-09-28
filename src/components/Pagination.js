import styled from "@emotion/styled";
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

  const Pagination = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  `;

  const Button = styled.button`
    width: 40px;
    height: 40px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    border-color: #eee;
  `;
  return (
    <Pagination>
      {pageNumbers.map((number, index) => (
        <Button
          className={number == currentPage ? "active" : ""}
          key={index}
          onClick={() => {
            setCurrentPage(number);
          }}
        >
          {number}
        </Button>
      ))}
    </Pagination>
  );
};

export default Pagination;
