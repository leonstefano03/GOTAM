const sequelize = require("sequelize");
const db = require("../config/db");

class Area extends sequelize.Model {}

Area.init({
  name_of_area: {
    type: sequelize.STRING, 
    allowNull: false ,
  },
},{sequelize: db, modelName: 'Area'});

module.exports = Area
