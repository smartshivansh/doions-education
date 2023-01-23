import React from "react";

import classes from "./Sec4.module.css";

const Sec4 = () => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>How does this work?</p>
      <p className={classes.content}>
        As a Project Intern, you get to work in the above mentioned domains of
        your choice. There are certain criteria's that you need to fullfil
        before getting into this program. This program is initiated to provide
        support to individuals who are trying to follow their passion and wish
        to create a career out of it.
      </p>
      <ul>
        <li className={classes.listitem}>
          This program is free of cost and exclusively for those who have keen
          interest in working in these domians or who even have a bare minimum
          experience working in these domains.
        </li>
        <li className={classes.listitem}>
          This program aims to give you industry experience and will make you
          job-ready!
        </li>
        <li className={classes.listitem}>Flexible work timings.</li>
        <li className={classes.listitem}>
          Preference will be given to those who have done some kind of work or
          projects (self-directed or motivated) previously in these domains.
        </li>
        <li className={classes.listitem}>
          The internship period will be of 30 days initially, but can be
          extended based on your performance and monthly assesment.
        </li>
        <li className={classes.listitem}>
          You'll have to undergo a screening interview to get into this program.
        </li>
        <p className={classes.content}>
          If you are interested to be a part of this program, please fill out
          this form and submit to us. We will contact you if we find your
          application suitable.
        </p>
      </ul>
    </div>
  );
};

export default Sec4;
