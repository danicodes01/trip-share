import TripItem from "./trip-item";
import classes from './trips-grid.module.css'
export default function TripsGrid({trips}) {
    return (
        <ul className={classes.trips}>
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
