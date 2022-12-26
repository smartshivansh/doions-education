import React from "react";

import classes from "./Sec2.module.css";

const Sec2 = () => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        How can I contribute as a Project Intern?
      </p>
      <p className={classes.content}>
        We are currently accepting application for the following roles-
      </p>
      <ul className={classes.list}>
        <li className={classes.listitem}>
          1. Tech- Web development, App development
        </li>
        <li className={classes.listitem}>2. Content</li>
        <li className={classes.listitem}>
          3. Design- Graphic design, UI/UX design
        </li>
        <li className={classes.listitem}>
          4. Sales & Marketing. AI and Data science
        </li>
      </ul>
    </div>
  );
};

export default Sec2;
