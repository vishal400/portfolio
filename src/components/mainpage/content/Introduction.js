import React from "react";
import classes from "./Introduction.module.css";
import { assets } from "../../../assets/ImportAssets";
import SocialMedia from "../../SocialMedia/SocialMedia";

const Introduction = () => {
  return (
    <div className={classes.container}>
      <div className={classes["intro-container"]}>
        <h1>
          Hello, I am <br />
          Vishal Waliyan..
        </h1>
        <p>
          I am a web developer from India. I really like the concept of creating
          anything you can think of with programming.
        </p>
        <div className={classes["social-container"]}>
          <SocialMedia src={assets.GitHub} />
          <SocialMedia src={assets.LinkedIn} />
        </div>
      </div>
      <img src={assets.SoftwareDeveloper}></img>
    </div>
  );
};

export default Introduction;
