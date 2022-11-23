import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecFiveImg from "../HomeComponents/SecFiveImg";
import SecFiveMH from "../HomeComponents/SecFiveMH";
import SecFiveMsg from "../HomeComponents/SecFiveMsg";

function SecFive() {
  return (
    <div>
      <Container className="py-0 py-md-5">
        <Row>
          <Col className="d-flex justify-content-center text-center">
            <SecFiveMH />
          </Col>
        </Row>
        <Row className="align-item-center">
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }}>
            <SecFiveMsg />
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }}>
            <SecFiveImg />
          </Col>
        </Row>
        <Row className="pt-5">
          <div>
            <a href="/Courses" className="text-danger fw-bold LinkAtag">
              Checkout our courses here
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default SecFive;
