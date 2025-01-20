import React from "react";
import Button from "../Button/Button";
import { LinkNav, Logo, Nav, NavContainer} from "./Header.styled";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Nav>
        <LinkNav to="/">
          <Logo src={logo} alt="AluraFlix Logo" />
        </LinkNav>
        <NavContainer>
          <LinkNav
            to="/new-video"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Button>Nuevo Video</Button>
          </LinkNav>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Header;