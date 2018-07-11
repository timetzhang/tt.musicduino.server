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
    create_time: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
    }, 
    update_time:{
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
    },
    name: Sequelize.STRING(45),
    author: Sequelize.STRING(45), 
    keyword: Sequelize.STRING(255), 
    staff_id: Sequelize.INTEGER,
    details: Sequelize.TEXT,
    click_count: Sequelize.INTEGER,
    type_id: Sequelize.INTEGER,
    status: Sequelize.TINYINT(10)
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = manufacturer;