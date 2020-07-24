const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
