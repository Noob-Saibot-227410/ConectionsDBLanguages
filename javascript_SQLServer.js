const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'mypassword',
  server: 'localhost',
  database: 'mydatabase'
};

(async function () {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM mytable');
    console.log(result);
    sql.close();
  } catch (err) {
    console.log(err);
  }
})();
