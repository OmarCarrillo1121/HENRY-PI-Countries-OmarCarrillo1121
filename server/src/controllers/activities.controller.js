const { Activity } = require("../database");

const getActivities = async (req, res) => {
  return await Activity.findAll();
};

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await newActivity.addCountries(countries);
  return newActivity;
};

module.exports = {
  getActivities,
  createActivity,
};
