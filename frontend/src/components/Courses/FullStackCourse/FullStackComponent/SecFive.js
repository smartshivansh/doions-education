import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SecFive() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center text-center fw-bold py-5   ">
          Technologies that will get covered in <br /> this course
        </h1>
        <Row>
          <Col>
            <ul>
              <li>
                <p> HTML5</p>
              </li>
              <li>
                {" "}
                <p> CSS3</p>
              </li>
              <li>
                <p>Javascript</p>
              </li>
              <li>
                <p> Bootstrap 4</p>
              </li>
              <li>
                <p>DOM Manipulation</p>
              </li>
              <li>
                <p>NPM</p>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <p>Node</p>
              </li>
              <li>
                <p> MongoDB</p>
              </li>
              <li>
                <p>REST</p>
              </li>
              <li>
                <p>Express</p>
              </li>
              <li>
                <p>ES6</p>
              </li>
              <li>
                <p>React</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecFive;
