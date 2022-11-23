import React from "react";
import { Modal } from "react-bootstrap";
import AllCourses from "./AllCourse";
import closeBtn from "../Image/closeBtn.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="animatemodal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div className=" p-3 d-flex justify-content-end">
          <img
            src={closeBtn}
            alt="SceTwoImg"
            className="img-fluid"
            width="50px"
            height="80px"
            onClick={props.onHide}
          />
        </div>

        <AllCourses {...props} />
      </Modal.Body>
    </Modal>
  );
}

function CoursesFullScreen() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="p-0">
      <button
        onClick={() => setModalShow(true)}
        className="p-2 mx-5 navStyle "
        style={{
          background: "white",
          border: "none",
        }}
      >
        Courses
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default CoursesFullScreen;
