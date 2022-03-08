import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container">
      <Navbar className="navbar-expand-lg m-0 " collapseOnSelect bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Link to="/" className="navbar-brand" >Exercise-Tracker</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            <Link to="/" className="nav-link" >Exercises</Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Link to="/create" className="nav-link" >Create Exercise Log</Link>
            <Link to="/user" className="nav-link" >Create Users</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
