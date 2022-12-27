import React from "react";

import classes from "./Sec6.module.css";

const Sec6 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>YOU WILL GET</h1>
      <ul className={classes.list}>
        <li className={classes.listitem}>
          <span className={classes.right}></span>A certificate of completion.
        </li>
        <li className={classes.listitem}>
          <span className={classes.right}></span>A Live Project Experiense of
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

        <li className={classes.subHeading}>Know more about Locallearn</li>
      </ul>
    </div>
  );
};

export default Sec6;
