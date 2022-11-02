import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  let itemlistclass = `${classes["item-list"]} ${classes["inactive"]}`;

  const expandHandler = () => {
    console.log(expand);
    setExpand((prevstate) => !prevstate);
    // itemlistclass = `${classes["item-list"]}`
  };

  if (expand) {
    itemlistclass = classes["item-list"];
  } else {
    itemlistclass = `${classes["item-list"]} ${classes["inactive"]}`;
  }

  const navLinks = (
    <div className={itemlistclass}>
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
  );

  return (
    <div className={classes.navbar}>
      <h1>Logo</h1>
      <a href="#" className={classes["toggle-button"]} onClick={expandHandler}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </a>
      {navLinks}
    </div>
  );
};

export default Navbar;
