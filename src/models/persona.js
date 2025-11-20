const { DataTypes } = require("sequelize")

const sequelize = require("../settings/db")

const User = sequelize.define(
    "user",
    {
        persona: { type: DataTypes.STRING, allowNull: false },
        apellidos: { type: DataTypes.STRING, allowNull: false },
        dni: { type: DataTypes.STRING, allowNull: false },
        fechaNacimiento: { type: DataTypes.STRING, allowNull: false }
    },
    {
        tableName: "user",
        timestamps: false
    }
);

module.exports = User;