//? Aqui se encuentran los endpoints de los posts
// Requerir router de express
const { Router } = require("express");
// Crear router para las rutas /posts
const activitiesRouter = Router();
const {
  getActivitiesHandler,
  createActivityHandler,
} = require("../handlers/activities.handler");

// Crea un usuario en la BDD
activitiesRouter.get("/", getActivitiesHandler);
// Crea un post en la BDD para un usuario
activitiesRouter.post("/", createActivityHandler);

//Exportar usersRouter
module.exports = activitiesRouter;
