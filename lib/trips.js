import prisma from '@/lib/prisma';

export async function getTrips() {
  const trips = await prisma.trip.findMany({
    orderBy: {
      id: 'desc', 
    },
  });
  return trips;
}

export async function getTripBySlug(slug) {
  return await prisma.trip.findUnique({
    where: {
      slug: slug,
    },
  });
}