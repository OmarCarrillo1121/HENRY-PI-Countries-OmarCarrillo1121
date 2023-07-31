const { Sequelize, DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // capital: {
      //   type: DataTypes.STRING,
      // allowNull: false,
      // },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
