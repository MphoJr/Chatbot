const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chatbotdb", "user", "password", {
  host: "localhost",
  dialect: "postgres", // or "mysql"
});

module.exports = sequelize;
