import React from "react";

import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <div className="">
      <div className="position-fixed bottom-0 end-0">
        <span className="m-2 btn rounded-circle bg-danger p-4 text-center">
          <a href="tel:+919329722268" className="h1 text-white mx-1 ">
            <AiFillPhone style={{ transform: "rotateZ(10deg)" }} />
          </a>
        </span>
      </div>

      <Container fluid className="ftr p-5 mt-5">
        <Row className="d-flex justify-content-center align-items-center ">
          <Col className="d-flex justify-content-center  align-items-center ms-0 ms-md-5 ps-0 ps-md-5">
            <div>
              <h1>Contact Detail</h1>
              <a className="ftrlink" href="https://doions.com" target="blank">
                www.doions.com
              </a>
              <br />
              <a className="ftrlink" href="mailto://info@doions.com">
                info@doions.com
              </a>
              <br />
              <a className="ftrlink" href="tel:+919329722268">
                9329722268
              </a>
              <br />
              <a className="ftrlink" href="tel://07613500430">
                0761-3500430
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-center  align-items-center p-sm-0">
            <div>
              <h1>Address</h1>
              <p>
                3rd Floor, Raina Tower, South <br /> Civil Lines, Jabalpur,
                Madhya
                <br />
                Pradesh 482001
              </p>
            </div>
          </Col>
          <Col
            sm={4}
            className="d-flex justify-content-center  align-items-center me-0 me-md-5 pe-0 pe-md-5 "
          >
            <div>
              <a
                href="https://www.facebook.com/doionsengineering"
                target="blank"
              >
                <AiFillFacebook size={70} />
              </a>
              <a
                href="https://www.instagram.com/doions_education/"
                target="blank"
              >
                <AiFillInstagram size={70} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
