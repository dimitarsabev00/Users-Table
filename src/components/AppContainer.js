import React, { useState } from "react";
import "./AppContainer.css";
import styled from "@emotion/styled";
import users_data from "../data/users_data.json";
import Users from "./Users";
import Pagination from "./Pagination";
const AppContainer = () => {
  const [users, setUsers] = useState(users_data);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [searchPhrase, setSearchPhrase] = useState("");
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const search = (e) => {
    const matchedUser = users_data.filter((user) => {
      return `${user.first_name} ${user.last_name} ${user.id} ${user.email}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setUsers(matchedUser);
    setSearchPhrase(e.target.value);
  };

  const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <PageWrapper>
      <h1>Users Table</h1>
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={searchPhrase}
          onChange={search}
        />
      </div>
      <Users users={currentUsers} setUsers={setUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </PageWrapper>
  );
};

export default AppContainer;
