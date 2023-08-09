const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/database.js");
const {
  saveApiCountriesToDB,
} = require("./src/controllers/countries.controller");
const PORT = 3001;

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .then(() => {
    saveApiCountriesToDB();
  })
  .catch((error) => console.error(error));
