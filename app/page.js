import classes from './page.module.css'
import Carousel from '@/components/carousel/carousel'
import Link from 'next/link'
import { getTrips } from '@/lib/trips'
export default async function Home () {
  const trips = await getTrips()

  return (
    <>
      <header className={classes.header}>
        <div className={classes.carousel}>
          <Carousel trips={trips} />
        </div>
      </header>
      <main className={classes.intro}>
        <p>
          <Link href='/trips/share' className={classes.link}>
            share
          </Link>{' '}
          and inspire others with your experiences
        </p>
      </main>
    </>
  )
}
