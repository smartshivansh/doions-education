import React from "react";
import classes from "./Sec4.module.css";

const Sec4 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>
        Activities on Weekly-Basis (Total 75 hours)
      </h1>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.c1}></div>
          <h3 className={classes.desp}>Classroom Activities (25 hours)</h3>
        </div>
        <div className={classes.card}>
          <div className={classes.c2}></div>
          <h3 className={classes.desp}>Team Activities (10 hours)</h3>
        </div>
        <div className={classes.card}>
          <div className={classes.c3}></div>
          <h3 className={classes.desp}>
            Live Product Development and Coding (30 hours)
          </h3>
        </div>
        <div className={classes.card}>
          <div className={classes.c4}></div>
          <h3 className={classes.desp}>
            live Project Realated Activities (10 hours)
          </h3>
        </div>
      </div>
      {/* <h4 style={{ color: "red", textDecoration: "underline" }}>Know More</h4> */}
    </div>
  );
};

export default Sec4;
