const sql = require("better-sqlite3");
const db = sql("trips.db");



const data = [
  {
    title: 'Old bug',
    slug: 'old-bug',
    image: 'bug.jpg',
    summary: 'An old bug',
    description: `
     We saw this cute old bug in Oaxaca!
    `,
    location: 'Playa Zicatela',
    author: 'Charly'
  },
  {
    title: 'Cactus',
    slug: 'cactus',
    image: 'cactus.jpg',
    summary: 'A lovely cactus by the sea',
    description: `
         We almost stepped on this beautiful cactus in Costa Rica!
    `,
    location: 'Playa Carrizalillo',
    author: 'Susan'
  },
  {
    title: 'Latinoamericana',
    slug: 'clock-tower',
    image: 'clocktower.jpg',
    summary: 'Tower in the city',
    description: `
      This is one of the coolest buildings in Mexico City! It even has a clock on it! 
    `,
    location: 'Torre Latinoamericana, DF',
    author: 'Emily Chen'
  },
  {
    title: 'Mars',
    slug: 'mars',
    image: 'mars.jpg',
    summary: 'Mars on stoop',
    description: `
   This is my cat before we left on our trip.
    `,
    location: 'Brklyn, New York',
    author: 'Laura Smith'
  },
  {
    title: 'Parque Roma Norte',
    slug: 'roma',
    image: 'roma.jpg',
    summary: 'lovely park in Roma',
    description: `
      This park is right next to the only english bookstore in town!
    `,
    location: 'Plaza Luis Cabrera',
    author: 'Mario Rossi'
  }
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS trips (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       description TEXT NOT NULL,
       location TEXT NOT NULL,
       author TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO trips VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @description,
         @location,
         @author
      )
   `);

  for (const trip of data) {
    stmt.run(trip);
  }
}

initData().catch(console.error);
