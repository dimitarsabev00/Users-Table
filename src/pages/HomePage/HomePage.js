import React, { useEffect, useState } from "react";
import "./HomePage.css";
import styled from "@emotion/styled";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase";
import ClipLoader from "react-spinners/ClipLoader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
`;

const override = {
  margin: "0 auto",
};
const HomePage = () => {
  const [firebaseUsers, setFirebaseUsers] = useState([]);
  const [users, setUsers] = useState(firebaseUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [searchPhrase, setSearchPhrase] = useState("");
  const usersCollectionRef = collection(db, "users");
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setFirebaseUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  console.log(firebaseUsers);
  return (
    <Container>
      <Header />
      {firebaseUsers.length === 0 ? (
        <ClipLoader size={100} cssOverride={override} />
      ) : (
        <Table
          users={firebaseUsers}
          setUsers={setUsers}
          users_data={firebaseUsers}
          setSearchPhrase={setSearchPhrase}
        />
      )}

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={firebaseUsers.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default HomePage;
