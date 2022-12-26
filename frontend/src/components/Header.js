import classes from "./Navigation.module.css";
import logo from "./Images/doionslogo.svg";
import { useState } from "react";
import xbtn from "./projectInternPage/Images/X.svg";
import { useNavigate } from "react-router";

function Header() {
  const [sidebarTransform, setSidebarTransfrom] = useState("110");
  const [sidebarDisplay, setSidebarDisplay] = useState(false);
  const [iconDisplay, setIconDisplay] = useState(null);
  const navigate = useNavigate();

  const sidebarDisplayHandler = () => {
    setSidebarDisplay((pre) => !pre);

    if (!sidebarDisplay) {
      setSidebarTransfrom("0");
      setIconDisplay("none");
    } else {
      setSidebarTransfrom("110");
      setIconDisplay("block");
    }
  };

  return (
    <div className={classes.container}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img className={classes.image} src={logo} alt="logo" />
      </div>
      <div className={classes.navbar}>
        <a href="/projectintern" className={classes.navitem}>
          Join as a Project Intern
        </a>
        <a href="https://doionseducation.myty.in/" className={classes.navitem}>
          Blog
        </a>
        <a
          href="#ContactUs"
          className={classes.navitem}
          style={{ marginRight: "0" }}
        >
          Contact Us
        </a>
      </div>
      <div
        className={classes.sideicon}
        onClick={sidebarDisplayHandler}
        style={{ display: iconDisplay }}
      >
        <div className={classes.sideiconimg}></div>
      </div>

      {/* //designingsidebar */}

      <div
        className={classes.sidebar}
        style={{
          transform: `translateX(${sidebarTransform}%)`,
          transition: "0.25s",
        }}
      >
        <div className={classes.xbtn}>
          <img
            src={xbtn}
            alt="imag"
            className={classes.image}
            onClick={sidebarDisplayHandler}
          />
        </div>
        <a
          href="/projectintern"
          className={classes.sidebaritem}
          style={{ color: "white" }}
        >
          Join as a Project Intern
        </a>
        <a
          href="https://doionseducation.myty.in/"
          className={classes.sidebaritem}
          style={{ color: "white" }}
        >
          Blog
        </a>
        <a
          href="#ContactUs"
          className={classes.sidebaritem}
          style={{ color: "white" }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Header;
