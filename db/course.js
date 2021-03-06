var Sequelize = require('sequelize');
var db = require('./db');

var course = db.define('course',{
    id: {
        type: Sequelize.BIGINT(11),
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

module.exports = course;