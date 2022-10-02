import styled from "@emotion/styled";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../configs/firebase";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
`;
const Select = styled.select`
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #2ecc71;
  border-radius: 10px;

  color: #fff;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #27ae60;
  }
`;
const Heading = styled.h2``;
const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectRole, setSelectRole] = useState();
  const [selectStatus, setSelectStatus] = useState();

  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionRef, {
      firstName,
      lastName,
      email,
      roles: selectRole,
      status: selectStatus,
    });
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>Create User</Heading>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Select
          value={selectRole}
          onChange={(e) => {
            setSelectRole(e.target.value);
          }}
        >
          <option>Select Role</option>
          <option>Admin</option>
          <option>Customer</option>
          <option>Support</option>
        </Select>
        <Select
          value={selectStatus}
          onChange={(e) => {
            setSelectStatus(e.target.value);
          }}
        >
          <option>Select Status</option>
          <option>Active</option>
          <option>Not Active</option>
        </Select>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
