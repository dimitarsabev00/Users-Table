import React, { useState } from "react";

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
    setSorted({ sorted: "name", reversed: !sorted.reversed });
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
    setSorted({ sorted: "name", reversed: !sorted.reversed });
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
    setSorted({ sorted: "name", reversed: !sorted.reversed });
  };
  return (
    <table>
      <thead>
        <tr>
          <td onClick={sortedByID}>ID</td>
          <td onClick={sortByFirstName}>First Name</td>
          <td onClick={sortByLastName}>Last Name</td>
          <td onClick={sortByEmail}>Email</td>
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
    </table>
  );
};

export default Users;
