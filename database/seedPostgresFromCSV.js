const CONFIG = require('../CONFIG');
const {
  Pool,
} = require('pg')


const pool = new Pool({
  user: CONFIG.DATABASE.USER,
  host: CONFIG.DATABASE.HOST,
  database: CONFIG.DATABASE.DATABASE,
  password: CONFIG.DATABASE.PWD,
  port: CONFIG.DATABASE.PORT,
})

// let sql = `DROP TABLE IF EXISTS hotel;

// CREATE TABLE hotel(
//   id INTEGER PRIMARY KEY,
//   hotel_name VARCHAR (255),
//   hotel_amenities VARCHAR (255),
//   room_features VARCHAR(255),
//   hotel_style VARCHAR(255),
//   hotel_class VARCHAR(255),
//   hotel_link VARCHAR(255),
//   about VARCHAR(855),
//   photos VARCHAR(255),
//   overall INTEGER,
//   location INTEGER,
//   cleanliness INTEGER,
//   service INTEGER,
//   value INTEGER
// );
//   `

// pool.query(sql, (err, res) => {
//   console.log(err, res)
// });

sql = `COPY hotel(id, 
  hotel_name, 
  hotel_amenities, 
  room_features, 
  hotel_style, 
  hotel_class, 
  hotel_link, 
  about, 
  photos, 
  overall, 
  location, 
  cleanliness, 
  service, 
  value) 
FROM '/Users/ian/ghrden01/Jared-About-Proxy/data.csv' DELIMITER ',' CSV HEADER;`;

pool.query(sql, (err, res) => {
  console.log(err, res)
});

pool.end();