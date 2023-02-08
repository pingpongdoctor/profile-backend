const router = require("express").Router();
const projectController = require("../controllers/projectController");
//GET ALL PROJECT
router.route("/").get(projectController.getAllProject);
//GET ONE PROJECT
// router.route("/:id").get(projectController.getOneProject);
module.exports = router;
