import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColanderImg from "./SecTwoImg/ColanderImg";
import OfflineImg from "./SecTwoImg/OfflineImg";
import RupayImg from "./SecTwoImg/RupayImg";
import TimeImg from "./SecTwoImg/TimeImg";

function SecTwo() {
  return (
    <div>
      <Container id="CourseDetails">
        <h1 className=" py-5 d-flex justify-content-center fw-bold">
          Course Details
        </h1>
        <div className="row row-cols-2">
          <Col md={3} className="py-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <TimeImg />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p>
                Available <br /> in shifts
              </p>
            </div>
          </Col>
          <Col md={3} className="py-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <RupayImg />
            </div>
            <div className="d-flex justify-content-center text-center">
              <p>
                4900/- <br />
                (taxes applicable)
              </p>
            </div>
          </Col>
          <Col md={3} className="py-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <OfflineImg />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p>Mode</p>
            </div>
          </Col>
          <Col md={3} className="py-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <ColanderImg />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p>30 day - 25 Hours</p>
            </div>
          </Col>
        </div>
        <Row>
          <Col className="py-5">
            <p>
              The course is designed keeping in mind those who are complete
              beginners in the field of web development. You can either be a
              student or a career seeker or an entrepreneur planning to start an
              e-venture.
            </p>
            <p>
              The course will start with absolute basic of web development and
              takes you till the advance concept like React and Express.
            </p>
            <p>
              This is a great starting point, if you wish to become a full stack
              developer and learn the fundamental of MERN Stack Development.
            </p>
            <p>
              JavaScript is the most popular language in the world and React is
              the most used web framework for building web applications. Adding
              this to your skill portfolio is a big plus.
            </p>
            <p>
              The course will also help you understand the concept of
              application development flow from the concept to deployment. You
              will also experience a new way of learning where you apply the
              concepts as soon as you learn them in a real world project.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecTwo;
