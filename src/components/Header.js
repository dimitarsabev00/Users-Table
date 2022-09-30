import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  margin: 0 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  border-color: #eee;
`;
const Header = () => {
  return (
    <Container>
      <h1>Users Table</h1>

      <Button>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/create-user"
        >
          Create User
        </Link>
      </Button>
    </Container>
  );
};

export default Header;
