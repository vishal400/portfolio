import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h1>Logo</h1>
      <a href="#" className={classes["toggle-button"]}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </a>
      <div className={classes["item-list"]}>
        <ul>
          <li>
            <a href="">Work Experience</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">My projects</a>
          </li>
          <li>
            <a href="">
              <div className={classes.download}>Download Resume</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
