import React, { useState, useEffect } from "react";

import classes from "./ApplyNowForm.module.css";
import xbtn from "../Images/X.svg";
import xbtnred from "../Images/xbtnred.svg";

const ApplyNowForm = (props) => {
  const [display, setDisplay] = useState("none");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [file, setFile] = useState();
  const [sucess, setSucess] = useState(false);

  function displayHandler() {
    setDisplay("none");
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

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  function formSubmitHandler(e) {
    e.preventDefault();

    if (name.length < 1) {
      alert("Please enter a valid name");
      return;
    } else if (mobile.length !== 10) {
      alert("Please enter a valid Mobile No");
      return;
    }

    try {
      fetch("http://localhost:5000/api/projintern", {
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
            const resume = new FormData();
            resume.append("resume", file);
            fetch("http://localhost:5000/api/resume", {
              method: "POST",
              body: resume,
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.sucess) {
                  setSucess(true);
                }
              });
          }
        });
    } catch (err) {
      console.log(err);
    }
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
          >{`Hi ${name},we have got your resume. we’ll contact and let you updated about the progress. Thank you!`}</p>
        </div>
      )}
      {!sucess && (
        <div className={classes.formContainer}>
          <div className={classes.header}>
            <p className={classes.heading}>APPLY FOR</p>
            <p className={classes.content}>Project Internship Program</p>
            <div className={classes.xbtn}>
              {" "}
              <img
                src={xbtn}
                alt="imag"
                className={classes.image}
                onClick={displayHandler}
              />
            </div>
          </div>
          (
          <form
            className={classes.form}
            onSubmit={formSubmitHandler}
            encType="multipart/form-data"
          >
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
            {/* <input type="file" className={classes.input} placeholder="E-mail" /> */}
            <input
              type="tel"
              value={mobile}
              onChange={mobileChangeHandler}
              className={classes.input}
              placeholder="Mobile no."
              required
            />
            <input
              accept=".pdf"
              type="file"
              className={classes.input}
              onChange={fileChangeHandler}
              required
            />
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

export default ApplyNowForm;
