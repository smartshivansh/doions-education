import React from "react";
// import SecOne from "./FullStackComponent/SecOne";
// import SecTwo from "./FullStackComponent/SecTwo";
// import SecThree from "./FullStackComponent/SecThree";
// import SecFour from "./FullStackComponent/SecFour";
// import SecFive from "./FullStackComponent/SecFive";
// import SecSix from "./FullStackComponent/SecSix";
// import SecSeven from "./FullStackComponent/SecSeven";
import classes from "./newFullStackCourse/Sec1.module.css";
import Header from "../../Header";
import Sec1 from "./newFullStackCourse/Sec1";
import Sec2 from "./newFullStackCourse/Sec2";
import Sec3 from "./newFullStackCourse/Sec3";
import Sec4 from "./newFullStackCourse/Sec4";
import Sec5 from "./newFullStackCourse/Sec5";
import Sec6 from "./newFullStackCourse/Sec6";
import Sec7 from "./newFullStackCourse/Sec7";
import Sec8 from "./newFullStackCourse/Sec8";
import Sec9 from "./newFullStackCourse/Sec9";
import Sec10 from "./newFullStackCourse/Sec10";

import ContactUs from "../../ContactUS/ContactUs";

function index() {
  return (
    <div className={classes.fullstackcontainer}>
      <Header />
      <Sec1 />
      {/* <Sec2 /> */}
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <Sec9 />
      <div id="ContactUs">
        <Sec10 />
      </div>
    </div>
  );
}

export default index;
