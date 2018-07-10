var Sequelize = require('sequelize');
var db = require('./db');

var manufacturer_case = db.define('manufacturer_case',{
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    manufacturer_id: Sequelize.INTEGER,
    name: Sequelize.STRING(45),
    details: Sequelize.TEXT
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = manufacturer_case;