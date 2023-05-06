import React from "react";
import Work from "../../Work/Work";
import classes from "./WorkExperience.module.css";

const workdata = [
  {
    title: "System Engineer",
    date: "2021 Mar - Present",
    description: [
      "Experience in software development, maintenance, testing, and troubleshooting on Stibo Master Data Management (MDM) for the retail industry.",
      "Working as Javascript developer for implementation of business rules in STEP (Stibo Systems Enterprise Platform) environment using Stibo SDK.",
      "Improved existing business rules to reduce the time complexities and improving overall functionalities such as reducing the time taken for linking assets to classifications to almost 50 percent.",
    ],
  },
  {
    title: "Android Developer(JAVA)",
    date: "2020 June - 2020 August",
    description: [
      "Worked as an android java developer for a medical related android app",
      "Implemented the chat and video call feature and handled the user interface work for chat feature",
      "Used Agora SDK to implement the chat/video call feature.",
      "Worked on broadcast recievers, notifications, etc",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className={classes.container} id="experience">
      <h1 className={classes.wheading}>Work Experience</h1>
      <div className={classes["work-container"]}>
        <div className={classes.line} />
        <div className={`${classes["ind-container"]} ${classes.indone}`}>
          <div className={`${classes.ind}`} />
        </div>
        <div className={`${classes["ind-container"]} ${classes.indtwo}`}>
          <div className={`${classes.ind}`} />
        </div>
        {/* <div className={`${classes["ind-container"]} ${classes.indthree}`}>
          <div className={`${classes.ind}`} />
        </div> */}

        <Work data={workdata[0]} />
        <Work data={workdata[1]} />
      </div>
    </div>
  );
};

export default WorkExperience;
