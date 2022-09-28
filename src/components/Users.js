import styled from "@emotion/styled";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const Users = ({ users, setUsers }) => {
  const [sorted, setSorted] = useState({ sorted: "id", reversed: "false" });
  const sortedByID = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id;
      }
      return userB.id - userA.id;
    });
    setUsers(usersCopy);
  };

  const sortByFirstName = () => {
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const firstNameA = `${userA.first_name}`;
      const firstNameB = `${userB.first_name}`;
      if (sorted.reversed) {
        return firstNameB.localeCompare(firstNameA);
      }
      return firstNameA.localeCompare(firstNameB);
    });
    setUsers(usersCopy);
    setSorted({ sorted: "first_name", reversed: !sorted.reversed });
  };

  const sortByLastName = () => {
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const lastNameA = `${userA.first_name}`;
      const lastNameB = `${userB.first_name}`;
      if (sorted.reversed) {
        return lastNameB.localeCompare(lastNameA);
      }
      return lastNameA.localeCompare(lastNameB);
    });
    setUsers(usersCopy);
    setSorted({ sorted: "last_name", reversed: !sorted.reversed });
  };
  const sortByEmail = () => {
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
    setSorted({ sorted: "email", reversed: !sorted.reversed });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };
  const Table = styled.table`
    border-collapse: collapse;
    max-width: 900px;
    width: 100%;
    margin: 2rem auto;
  `;

  return (
    <Table>
      <thead>
        <tr>
          <td onClick={sortedByID}>
            <span style={{ marginRight: "10px" }}>ID</span>

            {sorted.sorted === "id" ? renderArrow() : null}
          </td>
          <td onClick={sortByFirstName}>
            <span style={{ marginRight: "10px" }}>First Name</span>

            {sorted.sorted === "first_name" ? renderArrow() : null}
          </td>
          <td onClick={sortByLastName}>
            <span style={{ marginRight: "10px" }}>Last Name</span>

            {sorted.sorted === "last_name" ? renderArrow() : null}
          </td>
          <td onClick={sortByEmail}>
            <span style={{ marginRight: "10px" }}>Email</span>

            {sorted.sorted === "email" ? renderArrow() : null}
          </td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>{user.first_name}</td>
              <td>{user.last_name}</td>

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
    </Table>
  );
};

export default Users;
