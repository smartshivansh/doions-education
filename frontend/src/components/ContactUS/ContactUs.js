import React, { useState, Fragment } from "react";

import classes from "./ContactUs.module.css";

import Spinner from "../Spinner/Spinner";

import xbtnred from "./Images/xbtnred.svg";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [submit, setSubmit] = useState(true);

  function displayHandler() {
    setEmail("");
    setMsg("");
    setSubmit(false);
    setSucess(false);
  }

  const emailChangeHandler = (e) => {
    setEmail((p) => e.target.value);
  };

  const msgChangeHandler = (e) => {
    setMsg((p) => e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (msg.length < 1) {
      return;
    }
    setLoading(true);

    fetch("https://www.education.doions.com/api/contactus", {
      method: "POST",
      body: JSON.stringify({ email, msg }),
    })
      .then((res) => res.json())
      .then((res) => JSON.parse(res))
      .then((res) => {
        setLoading(false);
        setSucess(true);
      });
  };

  return (
    <div className={classes.container}>
      {sucess && (
        <div className={classes.sucesscard}>
          <div className={classes.xbtn}>
            <img
              src={xbtnred}
              alt="imag"
              className={classes.image}
              onClick={displayHandler}
            />
          </div>
          <p className={classes.msg}>
            We just received your message. Thank you very much for writing to
            us. We are working on your request and will get in touch as soon as
            possible.
          </p>
        </div>
      )}

      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          type="email"
          value={email}
          onChange={emailChangeHandler}
          className={classes.input}
          placeholder="E-mail"
        />
        <textarea
          placeholder="message"
          className={classes.textarea}
          value={msg}
          type="text"
          onChange={msgChangeHandler}
        ></textarea>
        <input type="submit" className={classes.submit} />
      </form>
    </div>
  );
}

export default ContactUs;
