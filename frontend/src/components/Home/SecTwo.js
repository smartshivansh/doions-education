import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecTwoImg from "../HomeComponents/SecTwoImg";
import SecTwoMH from "../HomeComponents/SecTwoMH";
import SecTwoMsg from "../HomeComponents/SecTwoMsg";
function SecTwo() {
  return (
    <div id="WhoWeAre">
      <Container className="py-0 py-md-5 my-0 my-md-5">
        <Row className="align-items-center">
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }}>
            <SecTwoImg />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 6, order: 2 }}
            className="d-flex flex-column align-self-center"
          >
            <SecTwoMH />
            <SecTwoMsg />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecTwo;
