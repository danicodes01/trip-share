import Image from 'next/image'
import { getTripBySlug } from '@/lib/trips'
import classes from './page.module.css'
import { notFound } from 'next/navigation'
export default async function TripDetailPage ({ params }) {
  const trip = await getTripBySlug(params.tripSlug)

  if(!trip) {

    notFound()
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`https://ourtrips.s3.amazonaws.com/photos/${trip.image}`} alt='title' layout="fill" />
        </div>
        <div className={classes.info}>
          <p>{trip.title}</p>
          <p>{trip.location}</p>
          <p>by {trip.author}</p>
        </div>
      <main>
        <p className={classes.description}>{trip.description}</p>
      </main>
      </header>
    </>
  )
}
