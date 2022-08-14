import React from "react";
import logo from "../../assets/logo.svg";
import { Container } from "../ui";

const Header = () => {
  return (
    <header className="mb-5">
      <Container>
        <img className="mx-auto mt-2" src={logo} alt="logo" />
      </Container>
    </header>
  );
};

export default Header;
