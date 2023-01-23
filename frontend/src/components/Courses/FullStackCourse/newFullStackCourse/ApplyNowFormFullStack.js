import React, { useState, useEffect } from "react";

import classes from "./ApplyNowFormFullStack.module.css";
import xbtn from "./images/X.svg";
import xbtnred from "./images/xbtnred.svg";

import Spinner from "../../../Spinner/Spinner";

const ApplyNowFormFullStack = (props) => {
  const [display, setDisplay] = useState("none");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);

  function displayHandler() {
    setDisplay("none");
    setSucess(false);
    setName("");
    props.onclick();
  }
  const nameChangeHandler = (e) => {
    setName((p) => e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail((p) => e.target.value);
  };

  const mobileChangeHandler = (e) => {
    setMobile((p) => e.target.value);
  };

  function formSubmitHandler(e) {
    e.preventDefault();

    setLoading(true);

    if (name.length < 1) {
      alert("Please enter a valid name");
      setLoading(false);
      return;
    } else if (mobile.length !== 10) {
      alert("Please enter a valid Mobile No");
      setLoading(false);
      return;
    }
    //https://www.education.doions.com
    try {
      fetch("https://www.education.doions.com/api/fullstack", {
        method: "POST",
        body: JSON.stringify({ name, email, mobile }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data = JSON.parse(data);
          if (data.sucess) {
            setSucess(true);
            setLoading(false);
            setEmail("");
            setMobile("");
            return;
          }
        });
    } catch (e) {
      setLoading(false);
    }

    setTimeout(() => {
      if (loading) {
        setLoading(false);
        alert("some error occoured please try again later");
      }
    }, 4000);
  }

  useEffect(() => {
    if (props.show) {
      setDisplay((p) => "flex");
    } else {
      setDisplay((p) => "none");
    }
  }, [props.show]);

  return (
    <div className={classes.container} style={{ display: display }}>
      {loading && <Spinner />}
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
          <p
            className={classes.msg}
          >{`Hi ${name},You are successfully enrolled for our 90 days program. Classes will be offline, we’ll contact and let you updated about the progress. Thank you!`}</p>
        </div>
      )}
      {!sucess && (
        <div className={classes.formContainer}>
          <div className={classes.header}>
            <p className={classes.heading}>APPLY NOW</p>

            <div className={classes.xbtn}>
              <img
                src={xbtn}
                alt="imag"
                className={classes.image}
                onClick={displayHandler}
              />
            </div>
          </div>
          <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.inputcontainer}>
              <input
                type="text"
                value={name}
                onChange={nameChangeHandler}
                className={classes.input}
                placeholder="Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={emailChangeHandler}
                className={classes.input}
                placeholder="E-mail"
                required
              />
              <input
                type="tel"
                value={mobile}
                onChange={mobileChangeHandler}
                className={classes.input}
                placeholder="Mobile no."
                required
              />
            </div>
            <input
              type="submit"
              className={classes.submit}
              placeholder="Mobile no."
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplyNowFormFullStack;
