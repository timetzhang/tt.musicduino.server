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
    name: Sequelize.STRING(45),
    create_time: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
    }, 
    address: Sequelize.STRING(200), 
    city: Sequelize.STRING(45), 
    province: Sequelize.STRING(45),
    country: Sequelize.STRING(45),
    contact: Sequelize.STRING(45),
    contact_position: Sequelize.STRING(45),
    contact_telphone: Sequelize.STRING(45), 
    contact_cellphone: Sequelize.STRING(45),
    contact_email: Sequelize.STRING(45),
    factory_area: Sequelize.INTEGER,
    factory_employee_count: Sequelize.INTEGER,
    factory_annual_production: Sequelize.DECIMAL(12,2),
    annual_paid_tax: Sequelize.DECIMAL(12,2),
    intro: Sequelize.STRING,
    payment_method: Sequelize.INTEGER,
    main_market: Sequelize.STRING(200),
    website: Sequelize.STRING(200)
},{
    timestamps: false,   // 不要默认时间戳
    freezeTableName: true
});

module.exports = manufacturer;