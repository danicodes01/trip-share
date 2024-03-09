'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./carousel.module.css";

export default function Carousel({trips}) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) =>
        prevIndex < trips.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [trips.length]);

  return (
    <div className={classes.carousel}>
      {trips.map((trip, index) => (

        <Image
          key={index}
          src={`https://ourtrips.s3.amazonaws.com/photos/${trip.image}`}
          className={index === photoIndex ? classes.active : ''}
          alt={trip.alt}
          layout="fill"
        />
      ))}
    </div>
  );
}

