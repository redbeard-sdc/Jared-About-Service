const redis = require('redis');

const client = redis.createClient(6379);

module.exports = (req, res, next) => {
  const { id } = req.params;
  client.get(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      if (data !== null) {
        res.json(JSON.parse(data));
      } else {
        next();
      }
    }
  })
}