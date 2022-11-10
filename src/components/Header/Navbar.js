import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  let itemlistclass = `${classes["item-list"]} ${classes["inactive"]}`;
  let toggleclass = `${classes["toggle-button"]}`

  const expandHandler = () => {
    console.log(expand);
    setExpand((prevstate) => !prevstate);
    // itemlistclass = `${classes["item-list"]}`
  };

  if (expand) {
    itemlistclass = classes["item-list"];
    toggleclass = `${classes["toggle-button"]} ${classes["toggleselect"]}}`
  } else {
    itemlistclass = `${classes["item-list"]} ${classes["inactive"]}`;
    toggleclass = `${classes["toggle-button"]}`
  }

  const clickHandler = (e) => {
    //e.preventDefault();
    setExpand(false);
  }

  const navLinks = (
    <div className={itemlistclass}>
      <ul onClick={clickHandler}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about" >About me</a>
        </li>
        <li>
          <a href="#experience" >Work Experience</a>
        </li>
        <li>
          <a href="#projects" >My projects</a>
        </li>
        <li>
          <a href="">
            <div className={classes.download}>Download Resume</div>
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className={classes.navbar}>
      <h1>VW</h1>
      <a className={toggleclass} onClick={expandHandler}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </a>
      {navLinks}
    </div>
  );
};

export default Navbar;
