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
  return (
    <Container>
      <Header />

      <Table
        users={currentUsers}
        setUsers={setUsers}
        users_data={users_data}
        setSearchPhrase={setSearchPhrase}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users_data.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default HomePage;
