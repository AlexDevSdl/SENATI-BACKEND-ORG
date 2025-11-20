const express = require("express");
const sequelize = require("./settings/db");
const personaRoutes = require("./routes/persona.routes");

const app = express();
app.use(express.json());

app.use("/u", personaRoutes);

sequelize.authenticate().then(() => console.log("conectado a la base de datos")).catch(err => console.log("error de conexion"));

module.exports = app;