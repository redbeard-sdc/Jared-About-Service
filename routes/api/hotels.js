const express = require('express');
const router = express.Router();
const db = require('../../database/index.js');
const redis = require('redis');
const redisCacheMiddleWare = require('../../database/redisCache.js');

// const client = redis.createClient(6379);

// PostgreSQL GET by ID, using KNEX
// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   db.select().from('hotel').where({ id })
//     .then(data => res.send(data))
//     .catch(err => res.send(`Error: could not find hotel with ID: ${id}, ${err}`));
// })

//PostgreSQL GET by ID, using PG
// router.get('/:id', redisCacheMiddleWare, (req, res) => {
//   const { id } = req.params;
//   const queryString = `SELECT * FROM hotel WHERE id=${id}`;

//   db.query(queryString)
//     .then(data => {
//       client.setex(id, 7200, JSON.stringify(data));
//       res.send(data.rows);
//     })
//     .catch(err => res.send(err));
// });

//PostgreSQL GET by ID, using PG
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const queryString = `SELECT * FROM hotel WHERE id=${id}`;

  db.query(queryString)
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err));
});

module.exports = router;