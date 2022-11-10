import React from "react";
import { assets } from "../../../assets/ImportAssets";
import Project from "../../Project/Project";
import classes from "./Projects.module.css";

const data = [
  "Created a chat app using node, express and socketio. \
  Chat room can be created by the users. \
  Multiple users can join a chat room and interact with other users. \
  I have also created other version of chat app for android where you can sign-up and login. \
  You can search for a particular user and have private chat with them. \
  Built backend in nodejs with express and socketio.",
  "Built using node, express and socketio.\
  Authentication added with middleware using expressjs.\
  Uses token based authentication with a npm package called bycryt.\
  Client side app developed in android.",
  "Built with reactjs/redux.\
  The app shows information about crypto currencies such as live price\
  and history.\
  Users can select reference currencies like USD, INR, etc in which they\
  want to view crypto currency prices.\
  Using rapid api for getting coin details that includes price, history, statistics, etc\
  Ant designs library used for building UI mostly."
];

const Projects = () => {
  return (
    <div className={classes.projects} id="projects">
      <h1>Projects</h1>
      <Project
        description={data[0]}
        src={assets.Chat}
        live={"https://green-node-chatapp.herokuapp.com/"}
        code={"https://github.com/vishal400/node-chat-app"}
      />
      <Project
        description={data[1]}
        src="https://img.freepik.com/premium-vector/clipboard-with-pen-page-work-performed-preparation-questionnaire-filling-out-documents-organizer-blue_249405-22.jpg?w=1060"
        code={"https://github.com/vishal400/node-task-manager"}
        order="order2"
      />
      <Project
        description={data[2]}
        src="https://thumbs.dreamstime.com/b/set-outline-coins-symbols-signs-popular-crypto-cu-set-outline-coins-symbols-signs-popular-crypto-110790052.jpg"
        live={"https://crypt0pia.herokuapp.com/"}
        code={"https://github.com/vishal400/crypto"}
      />
      {/* <Project src={assets.Chat} /> */}
    </div>
  );
};

export default Projects;
