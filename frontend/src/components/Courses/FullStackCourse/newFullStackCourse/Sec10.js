import React from "react";

import classes from "./Sec10.module.css";

import ContactUs from "../../../ContactUS/ContactUs";

const Sec10 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>
        Any questions? Just Ask! We'll be happy to answer
      </h1>
      <p>
        Let's have a commitment-free conversation and get to know more about it.
      </p>
      <ContactUs />
    </div>
  );
};

export default Sec10;
