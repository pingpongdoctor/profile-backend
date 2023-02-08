const Project = require("../models/projectModel");

//CALLBACK METHOD TO GET ALL PROJECT GENERAL INFORMATION
exports.getAllProject = async function (req, res) {
  const projects = await Project.find({});
  res.status(200).json(projects);
};

//CALLBACK METHOD TO GET ONE DETAILED PROJECT
// exports.getOneProject = async function (req, res) {
//   const project = await Project.findOne(
//     { _id: req.params.id },
//     {
//       name: 1,
//       tech_stack: 1,
//       deployment_link: 1,
//     }
//   );
//   res.status(200).json(project);
// };
