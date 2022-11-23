import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function MenuBtn(props) {
  if (props.expand) {
    return (
      <div>
        <h1>
          <AiOutlineClose style={{ color: "red" }} />
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <AiOutlineMenu style={{ color: "red" }} />
        </h1>
      </div>
    );
  }
}

export default MenuBtn;
