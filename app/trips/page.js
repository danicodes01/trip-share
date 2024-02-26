import Link from 'next/link';
import classes from './page.module.css'
export default function TripsPage() {
    return (
        <>
      <header className={classes.header}>
         <p><Link href='/trips/share' className={classes.link}>share </Link>your favorite memories with the world</p>
      </header>
      <main >
        <p>Trips grid (this will be a grid of photos)</p> 
      </main>
        </>
    )
}