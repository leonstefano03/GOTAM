const sequelize = require("sequelize");
const db = require("../config/db");

class Employee extends sequelize.Model {}

Employee.init(
  {
    full_name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    dni: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
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
      defaultValue: "No hay informacion adicional",
    }
  },
  { sequelize: db, modelName: "Employee" }
);

module.exports = Employee;
