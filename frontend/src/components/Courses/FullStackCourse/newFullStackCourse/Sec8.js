import React from "react";

import classes from "./Sec8.module.css";

const Sec8 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.redborder}></div>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.map}></div>
          <p className={classes.title}>LOCATION</p>
          <p className={classes.desp}>
            it is an offline program will be conducted at DOIONS premises,
            Jablpur
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.mode}></div>
          <p className={classes.title}>MODE</p>
          <p className={classes.desp}>
            it is an offline program will be conducted at DOIONS premises,
            Jablpur
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.team}></div>
          <p className={classes.title}>NUMBER OF PARTICIPANTS</p>
          <p className={classes.desp}>Maximum 20 in a Batch</p>
        </div>

        <div className={classes.card}>
          <div className={classes.calender}></div>
          <p className={classes.title}>START SCHEDULE</p>
          <p className={classes.desp}>
            The batch eill start fo 1st January 2023
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.project}></div>
          <p className={classes.title}>LIVE PROJECT</p>
          <p className={classes.desp}>
            Locallearn a co-learning platform for self-learning
          </p>
        </div>
      </div>
      <div className={classes.redborder}></div>
    </div>
  );
};

export default Sec8;
