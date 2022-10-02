import React from "react";

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{user.firstName}</td>

      <td>{user.lastName}</td>

      <td>{user.email}</td>
      <td>user</td>
      <td>active</td>
      <td
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <button onClick={(e) => handleEditClick(e, user)}>Edit</button>
        <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
