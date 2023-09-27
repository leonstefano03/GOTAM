const { Area } = require("../models");

class Area_services {
  async createArea(userData) {
    const createdUser = await Area.create(userData);
    return createdUser;
  }

  async findById(id) {
    const user = await Area.findByPk(id);
    return user;
  }

  async findAllAreas() {
    const users = await Area.findAll();
    return users;
  }

  async deleteById(id) {
    const userDelete = await Area.destroy({ where: { id } });
    return userDelete;
  }
}

module.exports = Area_services;
