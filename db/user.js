var Sequelize = require('sequelize');
var db = require('./db');

var manufacturer = db.define('manufacturer',{
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(16),
    password: Sequelize.STRING(32),
    email: Sequelize.STRING(255),
    cellphone: Sequelize.STRING(32),
    create_time: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
    }, 
    update_time: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
    }
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = manufacturer;