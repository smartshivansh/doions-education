import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Nav className="ms-auto" style={{ width: "max-content" }}>
        <Link
          to="/projectintern"
          className="mx-5 nav-link text-dark navStyle fw-bold"
        >
          Join as project intern
        </Link>
        <a
          href=" https://doionseducation.myty.in/"
          className="mx-5 p-2 navStyle  fw-bold"
        >
          Blog
        </a>
        <a
          href="#ContactUs"
          className="mx-5 p-2  fw-bold navStyle  text-nowrap"
        >
          Contact Us
        </a>
      </Nav>
    </>
  );
}

export default Navigation;
