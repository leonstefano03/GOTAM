const { User } = require("../models");

class User_services {
  async createUser(userData) {
    const createdUser = await User.create(userData);
    return createdUser;
  }

  async findByUserEmail(email) {
    const user = await User.findOne({
      where: { email },
    });
    return user;
  }

  async findById(id) {
    const user = await User.findByPk(id);
    return user;
  }

  async findAllUsers() {
    const users = await User.findAll();
    return users;
  }

  async deleteUserById(id) {
    const userDelete = await User.destroy({ where: { id } });
    return userDelete;
  }
}

module.exports = User_services;
