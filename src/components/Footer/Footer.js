import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <h1>Let's Connect</h1>
        <div className={classes.contact}>
          <p>vishal.waliyan47@gmail.com</p>
          <p>Copyright © 2022 VW</p>
          <p>+91 9540000695</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
