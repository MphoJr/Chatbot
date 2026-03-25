const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const University = sequelize.define("University", {
  name: { type: DataTypes.STRING, unique: true },
  deadline: { type: DataTypes.STRING },
});

module.exports = University;
