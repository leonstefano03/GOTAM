import sequelize from "sequelize";
import db from "../config/db";

class Area extends sequelize.Model {}

Area.init({
  name_of_area: {
    type: sequelize.STRING, 
    allowNull: false ,
  },
},{sequelize: db, modelName: 'Area'});

export default Area
