import Link from 'next/link'
import classes from './page.module.css'
import { getTrips } from '../../lib/trips'
import TripsGrid from '../../components/trips/trips-grid'

import Image from 'next/image'
export default async function TripsPage () {
  const trips = await getTrips()

  return (
    <>
      <header className={classes.header}>
        <p>
          <Link href='/trips/share' className={classes.link}>
            share{' '}
          </Link>
          your favorite memories with the world
        </p>
      </header>
      <main>
        <TripsGrid trips={trips}/>
      </main>
    </>
  )
}
