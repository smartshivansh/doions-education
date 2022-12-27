import React from "react";

import classes from "./Sec5.module.css";

import anurag from "./images/anurag.png";
import raviraj from "./images/raviraj.JPG";
import shivdutt from "./images/shivdutt.JPG";
import shivansh from "./images/shivansh.jpg";

const Sec5 = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.heading}>About Instructor</h1>
      <div className={classes.container}>
        <p className={classes.hidden}>
          The program will be led by Anurag Jain who is an entrepreneur & a
          software engineer by education and passionate about creating software
          products that are capable of solving some real-world problems, along
          with his team of experts Shiv Dutt Choubey, Shivansh Shrivastav and
          Raviraj Choudhary.
        </p>
        <div className={classes.left}>
          <div className={classes.displayed}>
            The program will be led by Anurag Jain who is an entrepreneur & a
            software engineer by education and passionate about creating
            software products that are capable of solving some real-world
            problems, along with his team of experts Shiv Dutt Choubey, Shivansh
            Shrivastav and Raviraj Choudhary.
          </div>

          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <img className={classes.image} src={shivdutt} alt="imag" />
              <p className={classes.name}>Shiv Dutt Choubey</p>
              <p className={classes.roll}>Expertise- Python, AI, backend</p>
            </div>
            <div className={classes.card}>
              <img className={classes.image} src={shivansh} alt="imag" />
              <p className={classes.name}>Shivansh Shrivastava</p>
              <p className={classes.roll}>Expertise- Full stack development</p>
            </div>
            <div className={classes.card}>
              <img className={classes.image} src={raviraj} alt="imag" />
              <p className={classes.name}>Raviraj Choudhary</p>
              <p className={classes.roll}>
                Expertise- Backend & App development
              </p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <img alt="imag" src={anurag} className={classes.anurag} />

          <p className={classes.name}>Anurag Jain</p>
          <p className={classes.roll}>
            Lead instructor, Expertise- full stack, product development, soft
            skills, entreprenurship
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
