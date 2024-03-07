'use server'
import { saveTrip } from './trips'

function isValidInput (input) {
  return !input || input.trim() === ''
}

export async function create (formData) {
  const trip = {
    title: formData.get('title'),
    location: formData.get('location'),
    author: formData.get('author'),
    summary: formData.get('summary'),
    description: formData.get('description'),
    image: formData.get('image')
  }

  if (
    isValidInput(trip.title) ||
    isValidInput(trip.location) ||
    isValidInput(trip.summary) ||
    isValidInput(trip.description) ||
    isValidInput(trip.author) ||
    !trip.image ||
    trip.image.size === 0
  ) {
      return
  }
  await saveTrip(trip)
}
