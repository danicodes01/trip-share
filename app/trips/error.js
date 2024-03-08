'use client'
export default function GlobalError ({ reset }) {
  return (
    <div className='error'>
      <h1>oh no!</h1>
      <p>Failed to fetch data ...</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
