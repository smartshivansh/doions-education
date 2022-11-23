import React from "react";

import { Link } from "react-router-dom";
function CardTwoKnowMore(props) {
  return (
    <div className="d-flex justify-content-end p-3">
      <Link
        to="/DigitalMarketing"
        onClick={() => {
          props.onHide();
        }}
        style={{ color: "red", textDecoration: "underline" }}
      >
        Know More
      </Link>
    </div>
  );
}

export default CardTwoKnowMore;
