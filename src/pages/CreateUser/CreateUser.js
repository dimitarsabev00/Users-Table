import styled from "@emotion/styled";
import React from "react";

const CreateUser = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>Create User</Heading>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
