import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavMenu from "../NavMenu/NavMenu";
import Logo from "../../images/logo.png";
import "./Header.css";
import { useHistory } from "react-router";

const Header = () => {
  const logoClick = useHistory();
  const handleLogo = () => {
    logoClick.push("/home");
  };
  return (
    <header>
      <p>This design copy from Bohurihi.com</p>
      <Navbar className="nav-bg" expand="lg">
        <Container>
          <Navbar.Brand onClick={handleLogo}>
            <img src={Logo} alt={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavMenu></NavMenu>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
