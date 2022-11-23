import React from "react";
import { Container } from "react-bootstrap";

function SecThree() {
  return (
    <div>
      <Container>
        <h1 className=" d-flex justify-content-center  fw-bold py-0 py-md-5 ">
          What you'll learn
        </h1>
        <p>
          <ul className="py-5">
            <li>Build Website with HTML and CSS</li>
            <li> Build mobile friendly web-sites with bootstrap 4 </li>
            <li> Programming fundamental with Javascript</li>
            <li>Application of javascript in web development </li>
            <li>Introduction to frameworks like React and Express</li>
            <li>Build Backend servers and API with Express and Nodejs</li>
            <li>Build Full-stack Web app with React and Express</li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default SecThree;
