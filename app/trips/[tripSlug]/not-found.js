import Link from 'next/link'
 
export default function TripNotFound() {
  return (
    <div className='not-found'>
      <h2>Trip not found</h2>
      <p>this trip was not found ...</p>
      <Link href="/trips">go back to trips</Link>
    </div>
  )
}