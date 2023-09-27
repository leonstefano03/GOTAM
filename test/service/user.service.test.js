const User_Services = require("../../services/user.services");
const { afterAll, beforeAll, describe, expect, it } = require("@jest/globals");
const UserModel = require("../../models/user");
const { db } = require("../../config/db");
const connect = require('../../server');

const newUserData = {
  email: "1234@test.com",
  password: "Hola1234",
  full_name: "leon stefano",
};

beforeAll(async () => {
  try {
    await connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

// afterAll(async () => {
//   // Close the database connection
//   await db.close();
//   console.log("Closed the database connection");
// });
describe("User_services", () => {
  const userServices = new User_Services(); // Crea una instancia del servicio

  // Prueba el método createUser
  it("should create a new user", async () => {
    // Llama al método createUser del servicio
    const createdUser = await userServices.createUser(newUserData);

    // Verifica si se ha creado el usuario correctamente
    expect(createdUser).toBeDefined();
    expect(createdUser.email).toBe(newUserData.email);
  });

  // Agrega más pruebas para los otros métodos del servicio aquí
});
