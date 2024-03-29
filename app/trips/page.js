import Link from 'next/link'
import classes from './page.module.css'
import FetchTrips from '../../components/trips/fetch-trips'
import { Suspense } from 'react'
export default function TripsPage () {
  return (
    <>
      <header className={classes.header}>
        <p>
          Explore captivating journeys and{' '}
          <Link href='/trips/share' className={classes.link}>
            share your own. {' '}   
          </Link>
            Dive into the world{"'"}s favorite destinations.
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Loading ...</p>}>
          <FetchTrips />
        </Suspense>
      </main>
    </>
  )
}
