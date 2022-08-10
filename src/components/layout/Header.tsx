import React from "react";
import logo from "../../assets/logo.svg";
import { Container } from "../ui";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <Container>
        <img className="mx-auto mt-2" src={logo} alt="logo" />
      </Container>
    </header>
  );
};

export default Header;
