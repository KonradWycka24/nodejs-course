const Sequelize = require("sequelize");
const sequelize = new Sequelize("nodejs", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
