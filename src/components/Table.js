import styled from "@emotion/styled";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { db } from "../configs/firebase";
const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 0;
`;
const Span = styled.span`
  margin-right: 0.5rem;
`;
const Table = ({ users, setUsers }) => {
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState({
    sorted: "firstName",
    reversed: "false",
  });
  const [searchPhrase, setSearchPhrase] = useState("");
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const sortByFirstName = () => {
    setSorted({
      sorted: "firstName",
      reversed: !sorted.reversed,
    });

    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const firstNameA = `${userA.firstName}`;
      const firstNameB = `${userB.firstName}`;
      if (sorted.reversed) {
        return firstNameB.localeCompare(firstNameA);
      }
      return firstNameA.localeCompare(firstNameB);
    });
    setUsers(usersCopy);
  };

  const sortByLastName = () => {
    setSorted({
      sorted: "lastName",
      reversed: !sorted.reversed,
    });

    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const lastNameA = `${userA.lastName}`;
      const lastNameB = `${userB.lastName}`;
      if (sorted.reversed) {
        return lastNameB.localeCompare(lastNameA);
      }
      return lastNameA.localeCompare(lastNameB);
    });
    setUsers(usersCopy);
  };

  const sortByEmail = () => {
    setSorted({
      sorted: "email",
      reversed: !sorted.reversed,
    });

    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const emailA = `${userA.email}`;
      const emailB = `${userB.email}`;
      if (sorted.reversed) {
        return emailB.localeCompare(emailA);
      }
      return emailA.localeCompare(emailB);
    });
    setUsers(usersCopy);
  };
  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  const filterByFirstName = (event) => {
    const matched = data.filter((user) => {
      return `${user.firstName}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setUsers(matched);
    setSearchPhrase(event.target.value);
  };
  const filterByLastName = (event) => {
    const matched = data.filter((user) => {
      return `${user.lastName}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setUsers(matched);
    setSearchPhrase(event.target.value);
  };
  const filterByEmail = (event) => {
    const matched = data.filter((user) => {
      return `${user.email}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setUsers(matched);
    setSearchPhrase(event.target.value);
  };
  return (
    <TableContainer>
      <thead>
        <tr>
          <td style={{ border: "none" }}>
            <input
              placeholder="Filter By First Name"
              style={{ width: "100%" }}
              onChange={filterByFirstName}
            ></input>
          </td>
          <td style={{ border: "none" }}>
            <input
              placeholder="Filter By Last Name"
              style={{ width: "100%" }}
              onChange={filterByLastName}
            ></input>
          </td>
          <td style={{ border: "none" }}>
            <input
              placeholder="Filter By Email"
              style={{ width: "100%" }}
              onChange={filterByEmail}
            ></input>
          </td>
        </tr>
        <tr>
          <td onClick={sortByFirstName}>
            <Span>First Name</Span>
            {sorted.sorted === "firstName" ? renderArrow() : null}
          </td>
          <td onClick={sortByLastName}>
            <Span>Last Name</Span>
            {sorted.sorted === "lastName" ? renderArrow() : null}
          </td>
          <td onClick={sortByEmail}>
            <Span>Email</Span>
            {sorted.sorted === "email" ? renderArrow() : null}
          </td>

          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>

              <td>{user.lastName}</td>

              <td>{user.email}</td>

              <td
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

export default Table;
