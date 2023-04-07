import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="Beauty and Company Logo" width="150" height="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <i className="fa-solid fa-cart-shopping"></i>
                &nbsp; Cart
              </Nav.Link>
              <Nav.Link href="#link">
                <i class="fa-sharp fa-solid fa-user"></i>
                &nbsp; Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
