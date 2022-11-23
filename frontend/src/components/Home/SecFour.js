import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecFourImg from "../HomeComponents/SecFourImg";
import SecFourMH from "../HomeComponents/SecFourMH";
import SecFourMsg from "../HomeComponents/SecFourMsg";
function SecFour() {
  return (
    <div>
      <Container className="py-0 py-md-5">
        <Row>
          <Col className="py-0 py-md-5 my-sm-0 my-md-5">
            <SecFourMH />
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex align-items-center"
            xs={{ span: 12, order: 1 }}
            sm={{ span: 6 }}
          >
            <SecFourImg />
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 6 }}>
            <SecFourMsg />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecFour;
