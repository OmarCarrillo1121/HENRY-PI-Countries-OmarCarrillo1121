const { Router } = require("express");

const {
  getCountriesHandler,
  getCountryHandler,
} = require("../handlers/countries.handler");

const countriesRouter = Router();

const validate = (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!email) return res.status(400).json({ error: "Missing email" });
  if (!phone) return res.status(400).json({ error: "Missing phone" });
  next();
};
// Trae la info de todos los paises (puede recibir un query para buscar por nombre)
countriesRouter.get("/", getCountriesHandler);
// Trae el detalle de un pais (params->id)
countriesRouter.get("/:id", getCountryHandler);

//Exportar usersRouter
module.exports = countriesRouter;
