import React from 'react'
import classes from './SocialMedia.module.css'

const SocialMedia = (props) => {
  return (
    <div className={classes["social-container"]}>
        <img src={props.src}></img>
    </div>
  )
}

export default SocialMedia