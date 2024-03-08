import Link from 'next/link'
 
export default function GlobalNotFound() {
  return (
    <div className='not-found'>
      <h2>Request not found</h2>
      <p>We are having trouble locating the requested resource ...</p>
      <Link href="/">go home</Link>
    </div>
  )
}