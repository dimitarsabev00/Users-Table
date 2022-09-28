import React, { useEffect, useState } from "react";
import "./Table.css";
import styled from "@emotion/styled";
import users_data from "./users_data.json";
import Users from "./Users";
import Pagination from "./Pagination";
const Table = () => {
  const [users, setUsers] = useState(users_data);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = currentPage / usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="table" style={{ textAlign: "center" }}>
      <h1>Users Table</h1>
      <Users users={currentUsers} setUsers={setUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Table;
