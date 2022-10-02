import styled from "@emotion/styled";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { db } from "../configs/firebase";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
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
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [editUserID, setEditUserID] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditClick = (event, user) => {
    event.preventDefault();

    setEditUserID(user.id);
    const formValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    const editedUsers = {
      id: editUserID,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === editUserID);

    newUsers[index] = editedUsers;
    setUsers(newUsers);
    setEditUserID(null);
    await updateDoc(doc(db, "users", editedUsers.id), { ...editedUsers });
  };
  const handleCancelClick = () => {
    setEditUserID(null);
  };

  const handleDeleteClick = async (userID) => {
    const newUsers = [...users];
    const index = users.findIndex((user) => user.id === userID);
    newUsers.splice(index, 1);
    setUsers(newUsers);
    try {
      const userDoc = doc(db, "users", userID);
      await deleteDoc(userDoc);
    } catch (error) {
      console.log(error);
    }
  };
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

          <td>Roles</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <>
            {editUserID === user.id ? (
              <EditableRow
                user={user}
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleEditFormSubmit={handleEditFormSubmit}
                handleCancelClick={handleCancelClick}
              />
            ) : (
              <ReadOnlyRow
                user={user}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
              />
            )}
          </>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
