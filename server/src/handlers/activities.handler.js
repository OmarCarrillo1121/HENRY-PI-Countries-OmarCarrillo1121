const {
  getActivities,
  createActivity,
} = require("../controllers/activities.controller");

const getActivitiesHandler = async (req, res) => {
  const allActivities = await getActivities();
  res.status(200).json(allActivities);
};

const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season } = req.body;
  try {
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season
    );
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivitiesHandler,
  createActivityHandler,
};
