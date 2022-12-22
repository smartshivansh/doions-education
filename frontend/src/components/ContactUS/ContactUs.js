import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactFrom from "../Form/ContactForm";
import ContactMH from "./ContactMH";

function index(props) {
  return (
    <div>
      <Container className="py-0 py-md-5">
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <ContactFrom {...props} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
