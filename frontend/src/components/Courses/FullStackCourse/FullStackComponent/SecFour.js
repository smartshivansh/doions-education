import React from "react";
import { Container } from "react-bootstrap";

function SecFour() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center text-center fw-bold py-0 py-md-5  ">
          What other benefits you will get with <br /> this course?
        </h1>
        <ol className="py-5">
          <li>
            <p> A certificate will be provided on completion</p>
          </li>
          <li>
            <p>
              A life time access to student community channel on slack to
              connect with fellow students
            </p>
          </li>
          <li>
            <p>
              Get your FREE developer portfolio/blog with myty - 1 year access
              of worth Rs 2100/-
            </p>
          </li>
        </ol>
      </Container>
    </div>
  );
}

export default SecFour;
