import React from "react";

import classes from "./Sec3.module.css";

import pdf from "./images/fullstack.pdf";

const Sec3 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Designed for an absolute beginner</h1>

      {/* <p className={classes.content}>
        <span className={classes.rights}></span>Provide Basic idea of coding
      </p> */}
      <p className={classes.content}>
        <span className={classes.rights}></span>Basics of Web development.
      </p>
      <p className={classes.content}>
        <span className={classes.rights}></span>Understanding of New age
        technologies like React, Express, Cloud and AI.
      </p>
      <p className={classes.content}>
        <span className={classes.rights}></span>
        Basics of Web and Mobile product development
      </p>
      <p className={classes.content}>
        <span className={classes.rights}></span>Building Websites and mobile
        apps
      </p>
      <p className={classes.content}>
        <span className={classes.rights}></span>Programming fundamentals and
        using JavaScript and Python
      </p>
      <p className={classes.content}>
        <span className={classes.rights}></span>Basics of Data Science using
        Python and AI.
      </p>

      <a target="blank" href={pdf}>
        <p className={classes.subHeading}>Get the full syllabus</p>
      </a>
    </div>
  );
};

export default Sec3;
