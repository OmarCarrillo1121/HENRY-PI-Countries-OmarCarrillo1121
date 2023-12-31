const axios = require("axios");
const { Country, Activity } = require("../database");
const { Op } = require("sequelize");

// Limpiar array traido desde la API. Dejar solo la info que nos interesa para unificar
const cleanArray = (arr) =>
  arr.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag_image: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "NOT DEFINED",
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      created: false,
    };
  });

// Este controller obtiene todos los paises de la API y los guarda en la BDD
const saveApiCountriesToDB = async () => {
  try {
    const countries = await Country.findAll();
    if (!countries.length) {
      const apiUsersRaw = (await axios.get("http://localhost:5000/countries"))
        .data;
      const apiUsers = cleanArray(apiUsersRaw);
      Country.bulkCreate(apiUsers);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Este controller trae todos los paises de la BDD
const getAllDBCountries = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
};

// Este controller va a buscar paises por id (PARAMS) en la BDD (incluye las actividades por pais)
const getCountryById = async (id) => {
  const countryById = await Country.findByPk(id, {
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  return countryById;
};

// Este controller va a buscar paises por name (QUERY) en la BDD
const getCountryByName = async (name) => {
  return await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
      // name: name,
    },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
};

module.exports = {
  saveApiCountriesToDB,
  getAllDBCountries,
  getCountryById,
  getCountryByName,
};
