const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const database = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../public')));

app.get('/hotels', (req, res) => {
  database.getAllHotels()
  .then((results => results.json()))
  .then((data) => {
    res.json(data)
  })
})

app.listen(PORT);