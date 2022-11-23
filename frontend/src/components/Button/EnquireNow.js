import React from "react";
import { Modal, CloseButton, Container, Row, Col } from "react-bootstrap";
import EnquireForm from "../Form/EnquiryForm";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      dialogClassName="animatemodalEnquire"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div className=" p-3" style={{ background: "#E63732" }}>
          <Container>
            <Row className="d-flex justify-content-center align-items-center  flex-nowrap">
              <Col className=" ms-5   text-nowrap text-white">
                <h1>ENQUIRE NOW</h1>
              </Col>
              <Col className=" p-2 ms-2 fw-bold">
                <CloseButton variant="white" onClick={props.onHide} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="p-3">
          <EnquireForm {...props} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

function EnquiryNow(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        className="p-2 p-md-3  px-2 px-md-3 px-md-4 m-2 fw-bold  Custombutton"
        onClick={() => setModalShow(true)}
      >
        Enquire Now
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EnquiryNow;
