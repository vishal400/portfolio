import React, { Fragment } from "react";
import Introduction from "./Introduction";
import classes from "./Home.module.css";
import {assets} from '../../../assets/ImportAssets'
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

const Home = () => {
  return (
    <Fragment>
      <div className={classes["outer-container"]}>
        <div className={classes.container}>
          <Introduction />
          <div className={classes.downArrow}>
            <a href="#about"><img src={assets.DownArrow} alt='down arrow' /></a>
            
          </div>
          
          <AboutMe/>
          <WorkExperience/>
          <Projects/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
