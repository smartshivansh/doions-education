import React from "react";
import Header from "../Header";
import Sec1 from "./projectInternPageElements/Sec1";
import Sec2 from "./projectInternPageElements/Sec2";
import Sec3 from "./projectInternPageElements/Sec3";
import Sec4 from "./projectInternPageElements/Sec4";
import Sec5 from "./projectInternPageElements/Sec5";
import ContactUs from "../ContactUS/ContactUs";
import classes from "./projectInternPageElements/Sec1.module.css";

const ProjectInternPage = () => {
  return (
    <div className={classes.maincontainer}>
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <div id="ContactUs">
        <ContactUs />
      </div>
    </div>
  );
};

export default ProjectInternPage;
