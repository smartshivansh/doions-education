import React, { useState } from "react";

import classes from "./Sec9.module.css";
import ApplyNowFormFullStack from "./ApplyNowFormFullStack";

const Sec9 = () => {
  const [show, setshow] = useState(false);

  function formShowHandler() {
    setshow((p) => !p);
  }

  return (
    <div className={classes.container}>
      <ApplyNowFormFullStack show={show} onclick={formShowHandler} />
      <h1 className={classes.heading}>Who can or should take this course?</h1>
      <ul className={classes.list}>
        <li className={classes.listitem}>
          Students who are passionate about creating a career in software
          development.
        </li>
        <li className={classes.listitem}>
          People who wish to transition their career into programming.
        </li>
        <li className={classes.listitem}>
          Anyone who wants to get an experience working on Live Projects.
        </li>
        <li className={classes.listitem}>
          Women who wish to re-start their career
        </li>
      </ul>
      <div className={classes.applybtn} onClick={formShowHandler}>
        Apply Now
      </div>
    </div>
  );
};

export default Sec9;
