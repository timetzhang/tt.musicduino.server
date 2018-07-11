var Sequelize = require('sequelize');
var db = require('./db');

var doc_reply = db.define('doc_reply',{
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    doc_id: Sequelize.BIGINT(11),
    user_id: Sequelize.BIGINT(11),
    details: Sequelize.TEXT
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = doc_reply;