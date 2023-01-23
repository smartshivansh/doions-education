import React from "react";

import classes from "./Sec6.module.css";

const Sec6 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>You will get</h1>
      <ul className={classes.list}>
        <li className={classes.listitem}>
          <span className={classes.right}></span>A certificate on completion.
        </li>
        <li className={classes.listitem}>
          <span className={classes.right}></span>A Live project experience of
          Locallearn.
        </li>
        <li className={classes.listitem}>
          <span className={classes.right}></span>Make you job-ready as per
          industry standards.
        </li>
        <li className={classes.listitem}>
          <span className={classes.right}></span>Experience working in a
          corporate setup.
        </li>

        <a href="https://locallearn.in/">
          <p className={classes.subHeading}>Know more about Locallearn</p>
        </a>
      </ul>
    </div>
  );
};

export default Sec6;
