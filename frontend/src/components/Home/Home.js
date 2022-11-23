import React from "react";
import SecFive from "./SecFive";
import SecFour from "./SecFour";
import SecOne from "./SecOne";
import SecThree from "./SecThree";
import SecTwo from "./SecTwo";
import ContactUs from "../ContactUS/ContactUs";

function index() {
  return (
    <div>
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
      <ContactUs />
    </div>
  );
}

export default index;
