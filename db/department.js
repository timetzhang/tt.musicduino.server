var Sequelize = require('sequelize');
var db = require('./db');

var department = db.define('department',{
    id: {
        type: Sequelize.TINYINT(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(255)
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = department;