import { useState } from "react";
import "./HomePage.css";
import styled from "@emotion/styled";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import ClipLoader from "react-spinners/ClipLoader";
import { useContextApp } from "../../context/AppContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const override = {
  margin: "0 auto",
};
const HomePage = () => {
  const { isLoading, users } = useContextApp();

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <Container>
      <Header />

      {isLoading ? (
        <ClipLoader size={100} cssOverride={override} />
      ) : (
        <Table currentUsers={currentUsers} />
      )}

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
