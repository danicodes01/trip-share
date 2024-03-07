'use server'

function isValidInput(input) {
    return !input || input.trim() === '';
}

export async function create(formData) {
    console.log('create', formData)
    const trip = {
        title: formData.get('title'),
        author: formData.get('author'),
        summary: formData.get('summary'),
        description: formData.get('description'),
        image: formData.get('image'),
    }

    if (
        isValidInput(trip.title) ||
        isValidInput(trip.author) ||
        isValidInput(trip.summary) ||
        isValidInput(trip.description) ||
        isValidInput(trip.image) || 
        !trip.image || trip.image.size === 0
    ) 
    return {
        message: "Invalid Input"
    }

    console.log(trip)
}