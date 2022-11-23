import React from "react";
import { Container } from "react-bootstrap";

function SecSix() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center fw-bold py-5 ">
          Who should take this course?
        </h1>
        <ul className="py-0">
          <li>
            <p> Anyone who is curious about programming </p>
          </li>
          <li>
            <p> Entrepreneurs</p>
          </li>
          <li>
            <p>Those looking for a career change </p>
          </li>
          <li>
            <p>Serious coders & hobbyists</p>
          </li>
          <li>
            {" "}
            <p> Students & teenagers</p>
          </li>
          <li>
            <p>Anyone who wants to learn web development</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default SecSix;
