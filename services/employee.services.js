const { Employee } = require("../models");

class Employee_services {
  async createEmployee(employeeData) {
    const createdEmployee = await User.create(employeeData);
    return createdEmployee;
  }

  async findEmployeeByDni(dni) {
    const employee = await Employee.findOne({
      where: { dni },
    });
    return employee;
  }

  async findById(id) {
    const employee = await Employee.findByPk(id);
    return employee;
  }

  async findAllEmployees() {
    const employees = await Employee.findAll();
    return employees;
  }

  async deleteEmployeeById(id) {
    const employeeDelete = await Employee.destroy({ where: { id } });
    return employeeDelete;
  }
}

module.exports = Employee_services;
