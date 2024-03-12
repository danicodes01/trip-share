import prisma from '@/lib/prisma';
import slugify from'slugify';
import { S3 } from '@aws-sdk/client-s3';
import { revalidatePath} from 'next/cache'

const s3 = new S3({
  region: 'us-east-1',
});

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

export async function saveTrip(trip) {
  trip.slug = slugify(trip.title, { lower: true });

  const extension = trip.image.name.split(".").pop();
  const timestamp = Date.now();
  const filename = `${trip.slug}-${timestamp}.${extension}`;
  const key = `photos/${filename}`;

  const bufferedImage = await trip.image.arrayBuffer();

  await s3.putObject({
    Bucket: 'ourtrips',
    Key: key,
    Body: Buffer.from(bufferedImage),
    ContentType: trip.image.type,
  });

  trip.image = filename;

  try {
    const savedTrip = await prisma.trip.create({
      data: trip,
    });
    return savedTrip;
  } catch (error) {
    console.error("Error saving trip to database:", error);
    throw error; 
  }
}