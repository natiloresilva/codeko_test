import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/hat.png";
import Image from "react-bootstrap/Image";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Image src={logo} className="logo" />
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/facts">Facts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
