'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

import bugImg from "@/assets/bug.jpg";
import cactusImg from "@/assets/cactus.jpg";
import clocktowerImg from "@/assets/clocktower.jpg";
import marsImg from "@/assets/mars.jpg";
import romaImg from "@/assets/roma.jpg";
import seadogImg from "@/assets/seadog.jpg"
import wigImg from "@/assets/wig.jpg";
import classes from "./carousel.module.css";


const images = [
  
  { image: bugImg, alt: "A old bug" },
  { image: cactusImg, alt: "A lovely cactus" },
  { image: clocktowerImg, alt: "Latino Americano" },
  { image: marsImg, alt: "A cat named Mars" },
  { image: romaImg, alt: "Fountain in Roma" },
  { image: seadogImg, alt: "A dog at the beach" },
  { image: wigImg, alt: "A wig" },
];

export default function Carousel() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.carousel}>
      {images.map((image, index) => (

        <Image
          key={index}
          src={image.image}
          className={index === photoIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

