import { getTrips } from "@/lib/trips"
import TripsGrid from "@/components/trips/trips-grid"

export default async function RenderTrips() {
    const trips = await getTrips()

    return <TripsGrid trips={trips}/>
}