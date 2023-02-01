const router = require("express").Router();
const projectController = require("../controllers/projectController");
//GET ALL PROJECT
router.route("/").get(projectController.getAllProject);
module.exports = router;
