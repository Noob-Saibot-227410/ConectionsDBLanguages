const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

client.connect();

client.query('SELECT * FROM mytable', (err, res) => {
  console.log(err ? err.stack : res.rows);
  client.end();
});
