import React from "react";
import { Modal, Container, Row } from "react-bootstrap";
import ApplyFormDigitalMarketing from "../Form/ApplyFormDigitalMarketing";
import CloseButton from "react-bootstrap/CloseButton";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="animatemodalEnquire"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div className=" p-3 mb-5" style={{ background: "#E63732" }}>
          <Container>
            <div className="d-flex justify-content-center  align-items-center  text-center">
              <div className="text-white col-11">
                <h2 className="text-nowrap  ">APPLY FOR</h2>
              </div>
              <div className="col=1 p-2 fw-bold">
                <CloseButton variant="white" onClick={props.onHide} />
              </div>
            </div>
            <Row>
              <div className="d-flex justify-content-center align-items-center text-center text-white ">
                <p>Basics of Digital Marketing - SEO/SMO</p>
              </div>
            </Row>
          </Container>
        </div>
        <ApplyFormDigitalMarketing {...props} />
      </Modal.Body>
    </Modal>
  );
}

function ApplyNowDigital() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="p-0">
      <button
        onClick={() => setModalShow(true)}
        className="p-2 p-md-3  px-2 px-md-3 px-md-4 m-2 fw-bold Custombutton"
      >
        Apply now
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ApplyNowDigital;
