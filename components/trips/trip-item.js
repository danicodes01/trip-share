import Image from 'next/image'
import classes from './trip-item.module.css'
import Link from 'next/link'
export default function TripItem ({
  title,
  image,
  slug,
  summary,
  location,
  author
}) {
  return (
    <Link className={classes.link} href={`/trips/${slug}`}>
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
        <div className={classes.discription}>
          <p className={classes.summary}>{summary}</p>
        </div>
      </article>
    </Link>
  )
}
