import React from "react";
import classes from "./AboutMe.module.css";
import { assets } from "../../../assets/ImportAssets";

const AboutMe = () => {
  return (
    <div className={classes["aboutme-container"]} id="about">
      <h1>About me</h1>
      <div className={classes.para}>
        <p>
          I'm a programmer who enjoys developing applications for a wide range
          of purposes. I am always looking for ways
          to create something new. I like solving problems and really like to learn about DSA.
          There are various web technologies I like working with such as reactjs, nodejs. 
        </p>
      </div>
      <div className={classes.skillcontainer}>
        <img src={assets.JavaScript} alt="javascript" />
        <img src={assets.Cpp} alt="cpp" />
        {/* <img src={assets.React} alt="react"/>
        <img src={assets.Node} alt="node"/>
        <img src={assets.Html} alt="html"/>
        <img src={assets.Css} alt="css"/> */}
      </div>
    </div>
  );
};

export default AboutMe;
