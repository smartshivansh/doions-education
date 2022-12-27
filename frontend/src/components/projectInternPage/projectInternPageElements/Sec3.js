import React from "react";

import classes from "./Sec3.module.css";

const Sec3 = () => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>What will I get out of this program?</p>
      <p className={classes.content}>
        This is an intensive internship program exclusively for those who really
        have an interest and motivation to create a career out of their passion.
        We are looking for motivated and self-directed individuals who would
        like to contribute to our project and also upgrade their skills while
        learning-on-the-go. As a project intern,
      </p>
      <ul>
        <li className={classes.listitem}>
          You will get hands-on experience of working on a project that is going
          to be a commercial product in future. Know more
        </li>
        <li className={classes.listitem}>
          You’ll work with a team of experienced professionals that will help
          you improve your skills.
        </li>
        <li className={classes.listitem}>
          elp you improve your skills. You’ll get an all-round learning
          experience of working with a product-based start-up. Learn about
          latest technologies, develop soft skills, personality development etc.
          and stand out among your peers and friends
        </li>
        <li className={classes.listitem}>
          You’ll also get a certificate upon completion of the tenure.
        </li>
      </ul>
    </div>
  );
};

export default Sec3;
