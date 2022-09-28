import React, { useEffect, useState } from "react";
import "./Table.css";
import styled from "@emotion/styled";
import users_data from "./users_data.json";
const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(users_data);
  }, []);

  return (
    <div className="table" style={{ textAlign: "center" }}>
      <h1>Users Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
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
    </div>
  );
};

export default Table;
