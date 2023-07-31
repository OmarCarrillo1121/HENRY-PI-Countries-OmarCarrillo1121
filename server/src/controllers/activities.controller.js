const { Activity } = require("../database");

const getActivities = async (req, res) => {
  return await Activity.findAll();
};

const createActivity = async (name, difficulty, duration, season) => {
  const newActivity = await Activity.create({ name, difficulty, duration, season });
  return newActivity;
};

module.exports = {
  getActivities,
  createActivity,
};  