// Configuración del server
const express = require("express");
const db = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./docs/swagger");
const swaggerJSDoc = require("swagger-jsdoc");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const server = express();
server.use(cookieParser());

server.use(cors(corsOptions));
server.use(express.json());
server.use("/api", routes);

//Swagger config
server.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(swaggerConfig))
);

const connect = () => {
  db.sync({ force: false })
    .then(() => {
      server.listen(3001, () => {
        console.log("Server is running on port 3001");
      });
    })
    .catch((error) => {
      console.error("Error connecting to dataBase: ", error);
    });
};

connect()

module.exports = connect;
