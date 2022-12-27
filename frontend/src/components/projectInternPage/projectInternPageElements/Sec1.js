import react, { useState } from "react";

import classes from "./Sec1.module.css";
import group from "../Images/group.JPG";
import ApplyNowForm from "./ApplyNowForm";

const Sec1 = () => {
  const [showForm, setShowForm] = useState(false);

  function showFormHandler() {
    setShowForm((p) => !p);
  }

  return (
    <div className={classes.container}>
      <ApplyNowForm show={showForm} onclick={showFormHandler} />
      <div className={classes.left}>
        <p className={classes.heading}>
          Want to turn your passion into a career? Then join us as a project
          intern!
        </p>
        <p className={classes.content}>
          An exclusive opportunity for those who want to follow their passion
          and upgrade your skills!(For both tech and non-tech roles)
        </p>
        <div className={classes.apply} onClick={showFormHandler}>
          Apply Now
        </div>
      </div>
      <div className={classes.right}>
        <img src={group} alt="group" className={classes.image} />
      </div>
    </div>
  );
};

export default Sec1;
