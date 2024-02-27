import Image from 'next/image'
import classes from './trip-item.module.css'
export default function TripItem ({ title, image, summary, location, author }) {
  return (
    <article className={classes.trip}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.info}>
          <p>{title}</p>
          <p>{location}</p>
          <p>by {author}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
      </div>
    </article>
  )
}
