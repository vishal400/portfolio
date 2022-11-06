import React from "react";
import Work from "../../Work/Work";
import classes from "./WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <div className={classes.container} id="experience">
      <h1 className={classes.wheading}>Work Experience</h1>
      <div className={classes["work-container"]}>
        <div className={classes.line}/>
        <div className={`${classes["ind-container"]} ${classes.indone}`}>
            <div className={`${classes.ind}`}/>
        </div>
        <div className={`${classes["ind-container"]} ${classes.indtwo}`}>
            <div className={`${classes.ind}`}/>
        </div>
        <div className={`${classes["ind-container"]} ${classes.indthree}`}>
            <div className={`${classes.ind}`}/>
        </div>
        
        <Work/>
        <Work/>
        <Work/>
      </div>
    </div>
  );
};

export default WorkExperience;
