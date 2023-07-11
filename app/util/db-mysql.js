//const Sequelize = require('sequelize').Sequelize;

// sets up connection pool
// const db = new Sequelize('shoplr', 'root', 'masicmedia007', {
//   dialect: 'mysql',
//   host: 'localhost',
// });

// module.exports = db;

const mysql = require('mysql2');

// create connection pool
// pool manages multiple connections since each query needs it's own connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shoplr',
  password: 'masicmedia007'
})

// allows us to use promises when working with pool connections
module.exports = pool.promise();
