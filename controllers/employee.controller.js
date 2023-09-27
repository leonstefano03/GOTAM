const asyncHandler = require("express-async-handler");
const Employee_Services = require("../services/employee.services");

const employee_service = new Employee_Services();

const createEmployee = asyncHandler(async (req, res) => {
  try {
   
    const employee = req.body;
    const foundEmployee = await employee_service.findEmployeeByDni(
      employee.dni
    ); 
   
    if (foundEmployee) {
      res.status(400).send("Invalid data");
    } else {
      await employee_service.createEmployee(employee);
      res.status(201).send("Registered employee succesfuly");
    }
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const updateIdEmployee = asyncHandler(async (req, res) => {
  try {
    const employeeUpdate = req.body;
    const { id } = req.params;

    const foundEmployeeById = await employee_service.findById(Number(id));

    if (!foundEmployeeById) {
      return res.status(404).send({ message: "Employee not found" });
    }
    await employee_service.employeeUpdate(Number(id), employeeUpdate);
    res.status(200).send({ message: "Employee succesfully updated" });
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const allEmployee = asyncHandler(async (req, res) => {
  try {
    const allEmployees = await employee_service.findAllEmployees();

    if (allEmployees.length === 0) {
      res
        .status(404)
        .send({ message: "There are no employees in the database" });
    }
    res.status(200).send(allEmployees);
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const getEmployeeId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employee_service.findById(Number(id));

    if (!employee) {
      res.status(404).send({ message: "Employee not found" });
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const deleteEmployee = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await employee_service.deleteEmployeeById(Number(id));
    if (!employee) {
      res.status(404).json({ message: "Employee noy found" });
    } else {
      res
        .status(200)
        .json({ message: "Employee deleted from database succesfully" });
    }
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

module.exports = {
  createEmployee,
  updateIdEmployee,
  allEmployee,
  getEmployeeId,
  deleteEmployee,
};
