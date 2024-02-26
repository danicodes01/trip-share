import classes from './page.module.css'
import Carousel from '@/components/carousel/carousel'
import Link from 'next/link'
export default function Home () {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
      </header>
        <main className={classes.intro}>
          <p><Link href='/trips/share' className={classes.link}>share </Link>and inspire others with your experiences</p>
      </main>
    </>
  )
}
