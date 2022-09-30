import React, { useState } from "react";
import "./HomePage.css";
import styled from "@emotion/styled";
import users_data from "../../data/users_data.json";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
`;
const HomePage = () => {
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

  return (
    <Container>
      <Header />
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={searchPhrase}
          onChange={search}
        />
      </div>
      <Table users={currentUsers} setUsers={setUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default HomePage;
