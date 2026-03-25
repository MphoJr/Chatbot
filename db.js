const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chatbot", "postgres", "Mphojr@123", {
  host: "localhost",
  dialect: "postgres", // or "mysql"
});

module.exports = sequelize;
