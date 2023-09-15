const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/tokens");
const User_Services = require("../services/user.services");

const user_service = new User_Services();

const signup = asyncHandler(async (req, res) => {
  try {
    const user = req.body;
    const foundUser = await user_service.findByUserEmail(user.email);
    if (foundUser) {
      res.status(400).send("invalid data");
    } else {
      await user_service.createUser(user);
      res.status(201).send("user created succesfuly");
    }
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await user_service.findByUserEmail(email);
    if (!user) {
      res.status(404).send("Invalid username or password");
      return;
    }
    const isValid = await user.validatePassword(password);
    if (!isValid) {
      res.status(401).send("Invalid username or password");
      return;
    }
    const payload = {
      id: user.id,
      email: user.email,
      full_name: user.full_name,
    };
    const token = await generateToken(payload);
    res.cookie("token", token);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send("Login error");
  }
});

const logout = asyncHandler(async (req, res) => {
  try {
    console.log(req.user);
    if (!req.user) {
      res.status(401).send("User is not logged in");
    }
    res.clearCookie("token");
    res.status(200).send("Logout successful");
  } catch (error) {
    res.status(500).send("Logout error");
  }
});

const updateId = asyncHandler(async (req, res) => {
  try {
    const userUpdate = req.body;
    const { id } = req.params;

    const foundUserById = await user_service.findById(Number(id));

    if (!foundUserById) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }
    await user_service.userUpdate(id, userUpdate);
    res.status(200).send({ message: "Usuario actualizado con éxito" });
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const all = asyncHandler(async (req, res) => {
  try {
    const allUsers = await user_service.findAllUsers();

    if (allUsers.length === 0) {
      res.status(404).send({ message: "no hay usuarios" });
    }
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const getUserId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await user_service.findById(Number(id));

    if (!user) {
      res.status(404).send({ message: "no hay usuario" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const user = await user_service.deleteUserById(Number(id));
    if (!user) {
      res.status(404).json({ message: "No hay usuario" });
    } else {
      res.status(200).json({ message: "Usuario eliminado" });
    }
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }

});

const me = asyncHandler(async (req, res) => {
    res.send(req.user);
  })

  
module.exports = {
  login,
  signup,
  logout,
  updateId,
  all,
  getUserId,
  deleteUser,
  me
};
