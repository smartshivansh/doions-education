import React from "react";
import { Link } from "react-router-dom";

function Submit() {
  return (
    <div>
      <button
        type="submit"
        className="p-2 px-4 me-2 m-3 fw-bold "
        style={{ background: "#E63732", color: "#fff", border: "none" }}
        component={Link}
        to="/"
      >
        Submit
      </button>
    </div>
  );
}

export default Submit;
