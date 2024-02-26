import sql from "better-sqlite3";
const db = sql("trips.db");

export function fetchTrips() {
  return db.prepare("SELECT * FROM trips ORDER BY id DESC").all();
}