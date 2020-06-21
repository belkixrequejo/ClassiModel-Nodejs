const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'prueba'
   // port: el que es el tuyo
  });
}

