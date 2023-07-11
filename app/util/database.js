const Sequelize = require('sequelize').Sequelize;

// sets up connection pool
const db = new Sequelize('vjezbe', 'root', 'masicmedia007', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = db;
