'use client'
export default function CreatePostError ({ reset }) {
  return (
    <div className='error'>
      <h2>oh no!</h2>
      <p>We ran into some trouble creating your post ...</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
