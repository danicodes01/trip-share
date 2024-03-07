'use client'

import { useRef, useState } from "react";
import classes from "./image-selector.module.css";
import Image from "next/image";
export default function ImageSelector({ label, name }) {
    const [selectedImage, setSelectedImage] = useState();
    const imageInputRef = useRef()

    function handleClick() {
        if(imageInputRef.current) {
            imageInputRef.current.click()
        }
      }

      function handleImageChange(e) {
        const file = e.target.files ? e.target.files[0]: null;
    
        if (!file) {
          return;
        }
    
        const fileReader = new FileReader();
    
        fileReader.onload = () => {
          setSelectedImage(fileReader.result);
        };
    
        fileReader.readAsDataURL(file);
      }
  
    return (
      <div className={classes.selector}>
        <label htmlFor={name}></label>
        <div className={classes.options}>
        <div className={classes.view}>
          {!selectedImage && <p>No image picked yet.</p>}
          {selectedImage && <Image src={selectedImage} alt="the image slected by user" fill />}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handleClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}