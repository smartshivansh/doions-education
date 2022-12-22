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
      <h1 className={classes.heading}>Who CAN and SHOULD take this course?</h1>
      <ul className={classes.list}>
        <li className={classes.listitem}>
          Anyone who is curious about programming with no prior experiense
          required.
        </li>
        <li className={classes.listitem}>Entrepreneurs and Hobbyists.</li>
        <li className={classes.listitem}>
          Anyone who wants to start contribute in Live Projects.
        </li>
        <li className={classes.listitem}>
          One who wants to gain real Coding World Experiense.
        </li>
        <li className={classes.listitem}>
          One who is interested in Web and Live Project Development
        </li>
        <li className={classes.listitem}>Students and serious-coders.</li>
      </ul>
      <div className={classes.applybtn} onClick={formShowHandler}>
        Apply Now
      </div>
    </div>
  );
};

export default Sec9;
