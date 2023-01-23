import React from "react";

import classes from "./Footer.module.css";

import facebook from "./image/facebook.svg";
import instagram from "./image/instagram.svg";
import myty from "./image/myty.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.subContainer}>
        <div className={classes.contact}>
          <h1 className={classes.heading}>Contact details</h1>
          <a href="https://doions.com/" className={classes.link}>
            www.doions.com
          </a>
          <a href="mailto:/info@doions.com" className={classes.link}>
            info@doions.com
          </a>
          <a href="tel:/info@doions.com" className={classes.link}>
            9329722268
          </a>
          <a href="tel:/info@doions.com" className={classes.link}>
            0761-3500430
          </a>
        </div>

        <div className={classes.address}>
          <h1 className={classes.heading}>Address</h1>
          <p className={classes.link}>3rd Floor, Raina Tower,</p>
          <p className={classes.link}>South Civil Lines,</p>
          <p className={classes.link}>Jabalpur, Madhya Pradesh, 482001</p>
        </div>
      </div>

      <div className={classes.socialLinks}>
        <a href="https://www.facebook.com/doionsengineering">
          <img src={facebook} alt="facebook" className={classes.img} />
        </a>
        <a href="https://www.instagram.com/doions_education/">
          <img src={instagram} alt="instagram" className={classes.img} />
        </a>
        <a href="https://doionseducation.myty.in/">
          <img
            src={myty}
            alt="myty"
            className={classes.img}
            id={classes.myty}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
