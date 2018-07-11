var Sequelize = require('sequelize');
var db = require('./db');

var staff = db.define('staff',{
    id: {
        type: Sequelize.TINYINT(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(255),
    dob: Sequelize.TIME,
    cellphone: Sequelize.STRING(45),
    email: Sequelize.STRING(45),
    password: Sequelize.STRING(32),
    id_number: Sequelize.STRING(45),
    create_time: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
    },
    resign_time: Sequelize.TIME,
    position: Sequelize.STRING(45),
    department_id: Sequelize.TINYINT(20),
    role_id: Sequelize.TINYINT(10),
    status_id: Sequelize.TINYINT(10)
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = staff;