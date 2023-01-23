import React from "react";
import classes from "./Sec4.module.css";

import classroom from "./images/classroom.svg";
import group from "./images/group.svg";
import bulb from "./images/bulb.svg";
import project from "./images/project.svg";

const Sec4 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>
        Activities on weekly-basis (Total 75 hours)
      </h1>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img src={classroom} alt="classroom" className={classes.c1} />
          <h3 className={classes.desp}>Classroom activities (25 hours)</h3>
        </div>
        <div className={classes.card}>
          <img src={group} alt="group" className={classes.c1} />
          <h3 className={classes.desp}>Team activities (10 hours)</h3>
        </div>
        <div className={classes.card}>
          <img src={bulb} alt="bulb" className={classes.c1} />
          <h3 className={classes.desp}>
            Live product development and coding (30 hours)
          </h3>
        </div>
        <div className={classes.card}>
          <img src={project} alt="project" className={classes.c1} />
          <h3 className={classes.desp}>
            Live project realated activities (10 hours)
          </h3>
        </div>
      </div>
      {/* <h4 style={{ color: "red", textDecoration: "underline" }}>Know More</h4> */}
    </div>
  );
};

export default Sec4;
