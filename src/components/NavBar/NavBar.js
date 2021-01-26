import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../hat.png";
import Image from "react-bootstrap/Image";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Image src={logo} className="logo" />
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/facts">Facts</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
