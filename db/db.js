/*
 * Name / 数据库连接
 * Author / T.T
 * Time / 2016-10-30
 */

var Sequelize = require('sequelize');
var dbConfig = require('./dbConfig');

var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password,  {
    host: dbConfig.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    timezone: '+08:00',
    operatorsAliases: false
});

module.exports = sequelize;