import React from "react";
import { Container } from "react-bootstrap";
import ApplyNowDigital from "../../../Button/ApplyNowDigital";

function SecSix() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center fw-bold py-5 mt-5">
          Who this course is for
        </h1>
        <ul>
          <li>
            <p>
              This course is for beginners - no prior experience is required{" "}
            </p>
          </li>
          <li>
            <p>This course is for entrepreneurs & hobbyists </p>
          </li>
          <li>
            <p>This course is for those looking for a career change</p>
          </li>
          <li>
            <p>
              This course is for students, artists, content creators and
              celebrities.
            </p>
          </li>
        </ul>
        <div className="d-flex justify-content-center pt-5">
          <ApplyNowDigital />
        </div>
      </Container>
    </div>
  );
}

export default SecSix;
