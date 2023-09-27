const path = require("path");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API De Gotam",
      description: "Esta API se encarga de manejar los datos de Gotam",
      version: "1.12.0",
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
    },
  ],
  basePath: "/api",
  apis: [
    path.resolve(__dirname, "./userDocs/userRoutes.yml"),
    path.resolve(__dirname, "./userDocs/userSchema.yml"),
    path.resolve(__dirname, "./employeeDocs/employeeRoutes.yml"),
    path.resolve(__dirname, "./employeeDocs/employeeSchema.yml"),
    path.resolve(__dirname, "./areaDocs/areaRoutes.yml"),
    path.resolve(__dirname, "./areaDocs/areaSchema.yml"),
  ],
};

module.exports = options;
