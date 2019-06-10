const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("ALL OF THE STUDENTS!!!");
})

router.get("/:id", (req, res, next) => {
  res.json("A PARTICULAR STUDENT");
})

// router.post;
// router.put;
// router.delete;

module.exports = router;
