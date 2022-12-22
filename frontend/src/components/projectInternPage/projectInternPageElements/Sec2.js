import React from "react";

import classes from "./Sec2.module.css";

const Sec2 = () => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        How can I contribute as a Project Intern?
      </p>
      <p className={classes.content}>
        We are currently accepting application fro the following roles-
      </p>
      <ol>
        <li className={classes.listitem}>
          Tech- Web development, App development
        </li>
        <li className={classes.listitem}>Content</li>
        <li className={classes.listitem}>
          Design- Graphic design, UI/UX design
        </li>
        <li className={classes.listitem}>
          Sales & Marketing. AI and Data science
        </li>
      </ol>
    </div>
  );
};

export default Sec2;
