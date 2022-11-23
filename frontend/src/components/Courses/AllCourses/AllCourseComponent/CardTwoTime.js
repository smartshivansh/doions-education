import React from "react";
import imgcol from "../../Image/colander.png";
function CardTwoTime() {
  return (
    <div className="ps-3 pt-2">
      <p>
        <img
          src={imgcol}
          alt="SceTwoImg"
          className="img-fluid"
          width="50px"
          height="40px"
        />
        30 day - 25 Hours
      </p>
    </div>
  );
}

export default CardTwoTime;
