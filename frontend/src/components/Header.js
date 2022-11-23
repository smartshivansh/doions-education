import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MenuBtn from "./Button/MenuBtn";

function Header() {
  const [expand, setExpand] = useState(false);
  const changeIcon = (e) => {
    setExpand(e);
  };

  return (
    <>
      <Navbar expand="lg" bg="white" variant="light" onToggle={changeIcon}>
        <Container className="pt-0 pt-md-5 mt-0 mt-md-5">
          <div className="d-flex justify-content-center col-6">
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="tog navToggle "
          >
            <MenuBtn expand={expand} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navigation />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
