'use server'
import { saveTrip } from './trips'
import { revalidatePath} from 'next/cache'
import { redirect } from 'next/navigation'

function isValidInput (input) {
  return !input || input.trim() === ''
}

export async function create (prevState ,formData) {
  const trip = {
    title: formData.get('title'),
    location: formData.get('location'),
    author: formData.get('author'),
    description: formData.get('description'),
    image: formData.get('image')
  }

  if (
    isValidInput(trip.title) ||
    isValidInput(trip.location) ||
    isValidInput(trip.description) ||
    isValidInput(trip.author) ||
    !trip.image ||
    trip.image.size === 0
  ) {
      return {
        message: "invalid input"
      }
  }
  await saveTrip(trip)
  console.log("revalidating path")
  revalidatePath('/trips', 'layout');
  console.log("revalidated path")

  redirect("/trips");
}
