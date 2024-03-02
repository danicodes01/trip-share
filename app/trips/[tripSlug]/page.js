import Image from 'next/image'
import { getTripBySlug } from '@/lib/trips'
import classes from './page.module.css'
export default async function TripDetailPage ({ params }) {
  const trip = await getTripBySlug(params.tripSlug)
  const { title, author, summary, description } = trip

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={trip.image} alt='title' layout="fill" />
        </div>
        <div className={classes.info}>
          <p>{title}</p>
          <p>by {author}</p>
          <p>{summary}</p>
        </div>
      <main>
        <p className={classes.description}>{description}</p>
      </main>
      </header>
    </>
  )
}
