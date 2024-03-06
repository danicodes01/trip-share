'use client'

import { useRef } from "react";
import classes from "./image-selector.module.css";
export default function ImageSelector({ label, name }) {
    const imageInputRef = useRef()

    function handleClick() {
        if(imageInputRef.current) {
            imageInputRef.current.click()
        }
      }
  
    return (
      <div className={classes.selector}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.options}>
          <input
            className={classes.input}
            type='file'
            id={name}
            accept='image/png, image/jpeg'
            name={name}
            ref={imageInputRef}
          />
          <button
            className={classes.btn}
            type='button'
            onClick={handleClick}
          >
            Pick an Image
          </button>
        </div>
      </div>
    );
  }