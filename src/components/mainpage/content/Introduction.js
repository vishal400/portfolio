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
          I like to build apps using various web technologies like react, nodejs
          and so on. I also like to solve DSA problems
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
