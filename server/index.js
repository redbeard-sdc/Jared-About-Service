const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const database = require('../database/index.js');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/hotels', (req, res) => {
  database
    .getAllHotels()
    .then(results => {
      res.json(results);
    })
    .catch(console.log);
});

app.get('/hotels/:name', (req, res) => {
  database
    .getHotel(req.params.name)
    .then(results => {
      res.json(results);
    })
    .catch(console.log);
});

app.listen(PORT);
