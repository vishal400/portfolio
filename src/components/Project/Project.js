import React from "react";
import Button from "../UI/Button";
import classes from "./Project.module.css";
import { assets } from "../../assets/ImportAssets";

const Project = (props) => {
  const btnoneclass = `${classes.button} ${classes.button1}`;
  const btntwoclass = `${classes.button} ${classes.button2}`;

  return (
    <div className={classes.projectcontainer}>
      <img src={props.src} className={classes[props.order]} />
      <div className={classes.detailscontainer}>
        <p>
          {props.description}
        </p>
        <div className={classes.buttoncontainer}>
          {props.live && (
            <a href={props.live} className={btnoneclass}>
              View project
            </a>
          )}
          <a href={props.code} className={btntwoclass}>
            source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
