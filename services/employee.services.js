const { Employee } = require("../models");

class Employee_services {
  async createEmployee(employeeData) {
    const createdEmployee = await Employee.create(employeeData);
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
  async employeeUpdate(id, updatedEmployeeData) {
    const [count, updatedEmployee] = await Employee.update(
      updatedEmployeeData,
      {
        where: { id },
      }
    );
    if (count === 0) {
      throw new Error(`No se encontró ningún empleado con el ID ${id}`);
    }
    return updatedEmployee;
  }
}

module.exports = Employee_services;
