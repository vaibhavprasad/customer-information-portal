const dbConfig = require('../config/db.config.js');
const logger = require('../config/logger.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Customer = require('./customer.model.js')(sequelize, Sequelize);
const Address = require('./address.model.js')(sequelize, Sequelize);

// Address.belongsTo(Customer);

db.Customer = Customer;
db.Address = Address;
logger.info(`ORM Models initialized`);
module.exports = db;
