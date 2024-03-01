import Image from 'next/image'
import { getTripBySlug } from '@/lib/trips'
export default async function TripDetailPage ({ params }) {
  const trip = await getTripBySlug(params.tripSlug)
  const { title, author, summary, description } = trip

  return (
    <>
      <header>
        <div>
          <Image src={trip.image} alt='title' fill />
        </div>
        <div>
          <h4>{title}</h4>
          <p>by {author}</p>
          <p>{summary}</p>
        </div>
      </header>
      <main>
        <p>{description}</p>
      </main>
    </>
  )
}
