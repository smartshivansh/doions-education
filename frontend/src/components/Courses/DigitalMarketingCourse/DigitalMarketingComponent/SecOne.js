import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecOneImg from "./SecOneImg";
import SecOneMH from "./SecOneMH";
import SecOneMsg from "./SecOneMsg";
import ApplyNowDigital from "../../../Button/ApplyNowDigital";
import DigitalKnowMore from "../../../Button/DigitalKnowMore";
function SecOne() {
  return (
    <div>
      <Container className="py-0 py-md-5 my-0 my-md-5">
        <Row>
          <Col sm={12} md={6} className="d-flex flex-column align-self-end">
            <SecOneMH />
            <SecOneMsg />
          </Col>
          <Col>
            <SecOneImg />
          </Col>
        </Row>
        <Row className="d-flex align-self-start pt-5">
          <Col xs={{ span: 6, offset: 0 }} sm={{ span: 3, offset: 0 }}>
            <ApplyNowDigital />
          </Col>
          <Col xs={{ span: 6, offset: 0 }} sm={{ span: 3, offset: 0 }}>
            <DigitalKnowMore />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecOne;
