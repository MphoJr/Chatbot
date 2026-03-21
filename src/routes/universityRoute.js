const express = require("express");
const router = express.Router();
const universityController = require("../controllers/universityController");

router.get("/", universityController.getUniversities);
router.get("/:name", universityController.getUniversityByName);

module.exports = router;
