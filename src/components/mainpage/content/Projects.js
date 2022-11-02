import React from 'react'
import Project from '../../Project/Project'
import classes from './Projects.module.css'

const Projects = () => {
  return (
    <div className={classes.projects}>
        <h1>Projects</h1>
        <Project/>
        <Project/>
        <Project/>
    </div>
  )
}

export default Projects