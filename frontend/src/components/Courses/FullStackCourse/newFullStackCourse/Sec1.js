import React, { useState } from "react";

import classes from "./Sec1.module.css";

import ApplyNowFormFullStack from "./ApplyNowFormFullStack";
import pdf from "./images/fullstack.pdf";

import shivani from "./images/shivani.JPG";

const Sec1 = () => {
  const [show, setshow] = useState(false);

  function formShowHandler() {
    setshow((p) => !p);
  }

  return (
    <div className={classes.container}>
      <ApplyNowFormFullStack show={show} onclick={formShowHandler} />
      <div className={classes.left}>
        <h1 className={classes.heading}>
          Learn to code & kick-start your career as a SDE!
        </h1>
        <div>
          <p className={classes.text}>
            A 12-week self-directed, project based learning program to help you
            get into a entry-level software developer job!
          </p>
          <p className={classes.startDate}>Strating from 1st January 2023.</p>
        </div>
        <div className={classes.apply}>
          <div className={classes.applybtn} onClick={formShowHandler}>
            Apply Now
          </div>
          <a target="blank" href={pdf}>
            <div className={classes.syllabusbtn}>Get the Full Syllabus</div>
          </a>
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes.image} alt="img" src={shivani} />
      </div>
    </div>
  );
};

export default Sec1;
