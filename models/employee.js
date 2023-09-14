const sequelize = require("sequelize");
const db = require("../config/db");

class Employee extends sequelize.Model {}

User.init(
  {
    full_name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    dni: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: sequelize.DATE,
      allowNull: false,
    },
    developer: {
      type: sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    additional_information: {
      type: sequelize.TEXT,
      defaultValue: "",
    }
  },
  { sequelize: db, modelName: "Employee" }
);

module.exports = Employee;
