const { Router } = require("express");

const router = Router();

const countriesRouter = require ("./countries.routes")
const activitiesRouter = require ("./activities.routes")

router.use("/countries", countriesRouter)
router.use("/activities", activitiesRouter)

module.exports = router;
