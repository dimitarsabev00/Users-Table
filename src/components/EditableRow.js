import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
  handleCancelClick,
}) => {
  return (
    <tr>
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
        <button onClick={handleEditFormSubmit}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
