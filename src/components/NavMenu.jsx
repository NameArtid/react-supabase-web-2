import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [isSession, setIsSession] = useState(null);
  return (
    <Navbar className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <NavbarBrand>
            <img src="./vite.svg" alt="logo" />
          </NavbarBrand>
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/category"}>
            Category
          </Nav.Link>
          <Nav.Link as={Link} to={"/product"}>
            Product
          </Nav.Link>
          <Nav.Link as={Link} to={"/order"}>
            Order
          </Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to={"/about"}>
            About
          </Nav.Link>
        </Nav>
        <Form className="me-2 d-flex">
          <Form.Control
            type="search"
            className="rounded-pill me-2"
            placeholder="Search"
          />
          <Button className="rounded-pill " variant="outline-primary">
            Search
          </Button>
        </Form>
        <Button
          variant="outline-primary"
          className="rounded-circle me-2"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          as={Link}
          to={"/cart"}
        >
          <FaShoppingCart />
          <div
            className="bg-danger rounded-circle align-items-center justify-content-center"
            style={{
              color: "white",
              bottom: 0,
              right: 0,
              position: "absolute",
              width: 20,
              height: 20,
            }}
          >
            5
          </div>
        </Button>
        {isSession ? 
          <Button variant="outline-danger" as={Link} to={"/"}>
            Logout
          </Button>
         : 
          <Button variant="outline-primary" as={Link} to={"/login"}>
            Login
          </Button>
        }
      </Container>
    </Navbar>
  );
}
