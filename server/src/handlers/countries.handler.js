const {
  getAllDBCountries,
  getCountryById,
  getCountryByName,
} = require("../controllers/countries.controller");

// Recibe requests de /countries y /countries/name?="..."
const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  const results = name
    ? await getCountryByName(name)
    : await getAllDBCountries();
  res.status(200).json(results);
};

// Recibe requests de /countries/:idPais
const getCountryHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountryById(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesHandler,
  getCountryHandler,
};
