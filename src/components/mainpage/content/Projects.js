import React from 'react'
import Project from '../../Project/Project'
import classes from './Projects.module.css'

const Projects = () => {
  return (
    <div className={classes.projects} id="projects">
        <h1>Projects</h1>
        <Project/>
        <Project  order="order2"/>
        <Project/>
    </div>
  )
}

export default Projects