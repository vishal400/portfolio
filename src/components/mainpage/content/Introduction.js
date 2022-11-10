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
          <a href="https://github.com/vishal400"><SocialMedia src={assets.GitHub} /></a>
          <a href="https://www.linkedin.com/in/vishal-waliyan-b8969a16a/"><SocialMedia src={assets.LinkedIn} /></a>
          
        </div>
      </div>
      <img src={assets.SoftwareDeveloper}></img>
    </div>
  );
};

export default Introduction;
