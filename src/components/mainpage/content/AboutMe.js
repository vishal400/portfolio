import React from "react";
import classes from "./AboutMe.module.css";
import {assets} from '../../../assets/ImportAssets'

const AboutMe = () => {
  return (
    <div className={classes["aboutme-container"]}>
      <h1>About me</h1>
      <div className={classes.para}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      </div>
      <div className={classes.skillcontainer}>
        <img src={assets.JavaScript} alt="javascript"/>
        <img src={assets.Cpp} alt="cpp"/>
        {/* <img src={assets.React} alt="react"/>
        <img src={assets.Node} alt="node"/>
        <img src={assets.Html} alt="html"/>
        <img src={assets.Css} alt="css"/> */}
      </div>
    </div>
  );
};

export default AboutMe;
