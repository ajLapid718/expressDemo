const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("ALL OF THE CAMPUSES!!!");
})

router.get("/:id", (req, res, next) => {
  res.json("A PARTICULAR CAMPUS");
})

// router.post;
// router.put;
// router.delete;

module.exports = router;
