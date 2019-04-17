// retrieve all hotels
app.get('/hotels', (req, res) => {
  database
    .getAllHotels()
    .then(results => {
      res.json(results);
    })
    .catch(console.log);
});

// retrieve single hotel by name query
app.get('/hotels/:name', (req, res) => {
  database
    .getHotel(req.params.name)
    .then(results => {
      res.json(results);
    })
    .catch(console.log);
});
