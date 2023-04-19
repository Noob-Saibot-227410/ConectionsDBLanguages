const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'mydatabase'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);

  connection.query('SELECT * FROM mytable', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });

  connection.end();
});
