import React from 'react'
import classes from './Work.module.css'

const Work = (props) => {
  return (
    <div className={classes.workcontainer}>
        <h1>heading</h1>
        <p>date will be here</p>
        <ul className={classes["work-list"]}>
            <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut l </span></li>
            <li><span>Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nu</span></li>
            <li><span>lla pariatur. Excepteur sint
        occaecat cupidatat no</span></li>
        </ul>
    </div>
  )
}

export default Work