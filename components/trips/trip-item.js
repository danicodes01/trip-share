import Image from 'next/image'
export default function TripItem ({ title, image, summary, location, author}) {
  return (
    <article>
      <header>
        <div>
          <Image src={image} alt={title} width={500} height={300} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{location}</p>
          <p>by {author}</p>
        </div>
      </header>
      <div>
        <p>{summary}</p>
      </div>
    </article>
  )
}
