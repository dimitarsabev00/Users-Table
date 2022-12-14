import React from "react";

const EditableRow = ({
  user,
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
  handleCancelClick,
}) => {
  return (
    <tr key={user.id}>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter A First Name.."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter A Last Name.."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter A Email.."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          required="required"
          name="roles"
          value={editFormData.roles}
          onChange={handleEditFormChange}
        >
          <option>Admin</option>
          <option>Customer</option>
          <option>Support</option>
        </select>
      </td>
      <td>
        <select
          required="required"
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        >
          <option>Active</option>
          <option>Not Active</option>
        </select>
      </td>
      <td
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <button onClick={handleEditFormSubmit}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
