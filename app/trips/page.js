import Link from 'next/link'
import classes from './page.module.css'
import { getTrips } from '../../lib/trips'
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
        <ul>
          {trips.map(trip => (
            <li key={trip.slug}>
              <article>
                <header>
                  <div>
                    <Image src={trip.image} alt={trip.title} width={500} height={300} />
                  </div>
                  <div>
                    <h4>{trip.title}</h4>
                    <p>by {trip.author}</p>
                  </div>
                </header>
                <div>
                  <p>{trip.summary}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
