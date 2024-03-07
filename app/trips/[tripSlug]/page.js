import Image from 'next/image'
import { getTripBySlug } from '@/lib/trips'
import classes from './page.module.css'
export default async function TripDetailPage ({ params }) {
  const trip = await getTripBySlug(params.tripSlug)
  const { title, author, description, image } = trip

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`https://ourtrips.s3.amazonaws.com/photos/${image}`} alt='title' layout="fill" />
        </div>
        <div className={classes.info}>
          <p>{title}</p>
          <p>by {author}</p>
          <p>{}</p>
        </div>
      <main>
        <p className={classes.description}>{description}</p>
      </main>
      </header>
    </>
  )
}
