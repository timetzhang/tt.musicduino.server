var Sequelize = require('sequelize');
var db = require('./db');

var doc_attachment = db.define('doc_attachment',{
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    doc_id: Sequelize.BIGINT(11),
    name: Sequelize.STRING(45),
    url: Sequelize.STRING(255)
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = doc_attachment;