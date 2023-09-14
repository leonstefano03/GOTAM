// Configuración del server
const express = require("express");
const db = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const server = express();
server.use(cookieParser());

server.use(cors(corsOptions));
server.use(express.json());
server.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    server.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((error) => {
    console.error("Error connecting to dataBase: ", error);
  });

