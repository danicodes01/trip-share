import image from 'next/image'
export default function TripDetailPage () {
  return (
    <>
    <header>
      <div>
        {/* <Image src={trip} alt='title' fill /> */}
      </div>
      <div>
        <h4>title</h4>
        <p>by author</p>
        <p>summary</p>
      </div>
    </header>
    <main>
      <p>description</p>
    </main>
    </>
    
  )
}
