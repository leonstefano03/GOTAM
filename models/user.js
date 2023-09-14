const sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends sequelize.Model {
  createHash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword = async function (password) {
    try {
      if (!this.salt || !this.password) {
        throw new Error("Salt or password missing");
      }

      const hash = await this.createHash(password, this.salt);
      return hash === this.password;
    } catch (error) {
      console.error("Error en validatePassword:", error);
      throw error;
    }
  };
}

User.init(
  {
    full_name: {
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    salt: { type: sequelize.STRING },
  },
  { sequelize: db, modelName: "User" }
);

User.addHook("beforeCreate", "hashPassword", (user, options) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;
  return user.createHash(user.password, salt).then((hash) => {
    user.password = hash;
    return Promise.resolve(user);
  });
});

module.exports = User;
