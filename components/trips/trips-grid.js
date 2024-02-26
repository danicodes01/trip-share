import TripItem from "./trip-item";
export default function TripsGrid({trips}) {
    return (
        <ul>
          {trips.map((trip) => (
            <li key={trip.slug}>
              <TripItem
                {...trip}
              />
            </li>
          ))}
        </ul>
      );

}
