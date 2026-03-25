const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const University = require("./university");

const FAQ = sequelize.define("FAQ", {
  question: { type: DataTypes.STRING },
  answer: { type: DataTypes.STRING },
});

// Relation: FAQ belongs to a University
FAQ.belongsTo(University, { foreignKey: "universityId" });
University.hasMany(FAQ, { foreignKey: "universityId" });

module.exports = FAQ;
