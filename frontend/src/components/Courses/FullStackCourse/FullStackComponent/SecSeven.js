import React from "react";
import { Container } from "react-bootstrap";
import ApplyNow from "../../../Button/ApplyNow";
function SecSeven() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center py-5 ">
          Who this course is for
        </h1>
        <ul>
          <li>
            <p>
              This course is for beginners - no prior experience is required
            </p>
          </li>
          <li>
            <p>This course is for entrepreneurs & hobbyists</p>
          </li>
          <li>
            <p>This course is for those looking for a career change</p>
          </li>
          <li>
            <p>
              This course is for anyone who wants to learn front-end and backend
              development
            </p>
          </li>
          <li>
            <p> This course is for students</p>
          </li>
        </ul>
        <div className="d-flex justify-content-center pt-5">
          <ApplyNow />
        </div>
      </Container>
    </div>
  );
}

export default SecSeven;
