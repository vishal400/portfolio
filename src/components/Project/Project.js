import React from "react";
import Button from "../UI/Button";
import classes from "./Project.module.css";
import { assets } from "../../assets/ImportAssets";

const Project = () => {

    const btnoneclass = `${classes.button} ${classes.button1}`;
    const btntwoclass = `${classes.button} ${classes.button2}`;

  return (
    <div className={classes.projectcontainer}>
      <img />
      <div className={classes.detailscontainer}>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nu
        </p>
        <div className={classes.buttoncontainer}>
          <a href="#" className={btnoneclass}>
            View project
          </a>
          <a href="#" className={btntwoclass}>
            source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
