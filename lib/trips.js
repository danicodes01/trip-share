import prisma from '@/lib/prisma';

export async function getTrips() {
  const trips = await prisma.trip.findMany({
    orderBy: {
      id: 'desc', 
    },
  });
  console.log(trips);
  return trips;
}