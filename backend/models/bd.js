var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    // host: '127.0.0.1',
    // user: "root",
    // password: "root",
    // database: "ejemplo",
    
    port:8889,//remover port cuando push a heroku
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
});

// MYSQL_HOST=127.0.0.1
// MYSQL_DB_NAME=ejemplo
// MYSQL_USER=root
// MYSQL_PASSWORD=root

pool.query = util.promisify(pool.query);
module.exports = pool;