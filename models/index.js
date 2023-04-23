const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("rejected", err);
  });

  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('./auth')(sequelize, DataTypes);
db.work = require('./work')(sequelize, DataTypes);

db.sequelize.sync( {force: false}).then(() => {
    console.log("sync done");
}).catch(err => {
    console.log("sync error", err);
})

module.exports = db;