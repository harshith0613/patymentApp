// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'swio'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database.');
});

const insertPayment = (name, amount) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO payments (name, amount) VALUES (?, ?)';
    connection.query(query, [name, amount], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = { connection, insertPayment };
