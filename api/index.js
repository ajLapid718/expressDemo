const router = require("express").Router();
const studentsRouter = require("./students");
const campusesRouter = require("./campuses");

router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);

module.exports = router;
