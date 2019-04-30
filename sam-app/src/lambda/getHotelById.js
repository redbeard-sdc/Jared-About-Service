const {
  Pool,
} = require('pg')

const pool = new Pool({
  user: process.env.Database_uid,
  host: process.env.Database_host,
  database: process.env.Database_name,
  password: process.env.Database_pwd,
  port: process.env.Database_port,
  max: 50,
});

exports.handler = (event, context, callback) => {
  console.log(event);
  const { id } = event.pathParameters;
  const queryString = `SELECT * FROM hotel WHERE id=${id}`;

  pool.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, {
        statusCode: 200,
        body: result
      });
    }
  });
};

/*
module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let client;
  const { id } = event.pathParameters;
  const queryString = `SELECT * FROM hotel WHERE id=${id}`;
  pool.connect().then(c => {
    client = c;
    return client.query(queryString)
  }).then(res => {
    console.log(res)
    client.release();
    const response = {
      "isBase64Encoded": false,
      "statusCode": 200,
      "body": JSON.stringify(res.rows)
    }
    callback(null, response);
  }).catch(error => {
    console.log("error", error);
    const response = {
      "isBase64Encoded": false,
      "statusCode": 500,
      "body": JSON.stringify(error)
    }
    callback(null, response);
  })
}
*.