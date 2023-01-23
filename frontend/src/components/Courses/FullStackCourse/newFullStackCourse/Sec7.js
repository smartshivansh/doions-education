import React from "react";

import classes from "./Sec7.module.css";

import html from "./images/html.svg";
import css from "./images/css.svg";
import javascript from "./images/javascript.svg";
import python from "./images/pyhon.svg";

import vscode from "./images/vscode.svg";
import github from "./images/github.svg";
import react from "./images/react.svg";
import mongodb from "./images/mongo.svg";
import node from "./images/node.svg";
import aws from "./images/aws.svg";

const Sec7 = () => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Languages</p>
      <div className={classes.langcont}>
        <div className={classes.l1}>
          <img src={html} alt="img" />
        </div>
        <div className={classes.l2}>
          <img src={css} alt="img" />
        </div>
        <div className={classes.l3}>
          <img src={javascript} alt="img" />
        </div>
        <div className={classes.l4}>
          <img src={python} alt="img" />
        </div>
      </div>
      <p className={classes.heading}>Tools and Technologies</p>
      <div className={classes.techcont}>
        <div className={classes.reactcont}>
          <img className={classes.vscode} alt="img" src={vscode} />
          <p className={classes.content}>VS Code</p>
        </div>
        <div className={classes.reactcont}>
          <img className={classes.github} alt="img" src={github} />
          <p className={classes.content}>GitHub</p>
        </div>
        <div className={classes.reactcont}>
          <img className={classes.react} alt="img" src={react} />
          <p className={classes.content}>React</p>
        </div>

        <div className={classes.backend}>
          <img className={classes.node} src={node} alt="img" />
        </div>
        <div className={classes.backend}>
          <img className={classes.mongodb} src={mongodb} alt="img" />
        </div>
        <div className={classes.backend}>
          <img className={classes.aws} src={aws} alt="img" />
        </div>
      </div>

      <div className={classes.redborder}></div>
    </div>
  );
};

export default Sec7;
