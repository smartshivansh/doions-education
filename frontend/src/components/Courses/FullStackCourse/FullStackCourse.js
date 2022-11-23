import React from "react";
import SecOne from "./FullStackComponent/SecOne";
import SecTwo from "./FullStackComponent/SecTwo";
import SecThree from "./FullStackComponent/SecThree";
import SecFour from "./FullStackComponent/SecFour";
import SecFive from "./FullStackComponent/SecFive";
import SecSix from "./FullStackComponent/SecSix";
import SecSeven from "./FullStackComponent/SecSeven";
import ContactUs from "../../ContactUS/ContactUs";
function index() {
  return (
    <div>
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
      <SecSix />
      <SecSeven />
      <ContactUs />
    </div>
  );
}

export default index;
