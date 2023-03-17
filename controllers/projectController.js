const Project = require("../models/projectModel");
//CALLBACK METHOD TO GET ALL PROJECT GENERAL INFORMATION
exports.getAllProject = async function (req, res) {
  const projects = await Project.find({});
  res.status(200).json(projects);
};

//CALLBACK METHOD TO ADD INDEX VALUE FOR ALL DOCUMENTS
//WHEN WE USE MONGOOSE, WE DO NOT NEED TO USE TOARRAY() TO CONVERT CURSOR TO ARRAY
exports.addIndexValue = async function () {
  const allProjects = await Project.find({});
  allProjects.map(async (project) => {
    project.index_value = allProjects.indexOf(project);
    await project.save();
  });
};

//CALLBACK FUNCTION TO UPDATE THE INDEX VALUE AND SORT BASED ON INDEX VALUE
exports.updateIndexValue = async function (name, newIndex) {
  await Project.updateOne({ name: name }, { $set: { index_value: newIndex } });
};

//FUNCTION TO CREATE A NEW PROJECT
exports.createProject = async () => {
  await Project.create({
    index_value: 3,
    name: "BrainFlix",
    description:
      "Provide a video streaming platform for users to share, comment on, and post placeholder videos. In other words, this website provides an intuitive and engaging user experience for video lovers.",
    deployment_link: "https://brainflix-platform.netlify.app/",
    tech_stack: {
      frontend: [
        "React",
        "React Hooks",
        "React Router Dom Library",
        "SASS",
        "BEM",
      ],
      backend: ["Node.js, ExpressJS,Multer Library, REST API"],
    },
    __v: 0,
  });
};

//CALLBACK FUNCTION TO SORT DOCUMENTS BASED ON INDEX VALUE
exports.sortDocumentsBasedOnIndexValue = async function () {
  try {
    const sortProjects = await Project.find({}).sort({ index_value: 1 });
    //DO NOT USE REMOVE METHOD TO DELETE DOCUMENTS SINCE IT IS DEPRECATED, DELETE IS THE BEST CHOICE
    await Project.deleteMany({});
    //WE CAN USE FOR LOOP OR PROMISE ALL WITH MAP METHOD TO WAIT FOR ALL PROMISES INSIDE THE MAP METHOD TO BE RESOLVED
    //USING PROMISE ALL DOES NOT ENSURE THE ORDER SINCE ALL PROMISES ARE EXECUTED CONCURRENTLY

    // await Promise.all(
    //   sortProjects.map(async (project) => {
    //     const { name, description, deployment_link, tech_stack, index_value } =
    //       project;
    //     await Project.create({
    //       name,
    //       description,
    //       deployment_link,
    //       tech_stack,
    //       index_value,
    //     });
    //   })
    // );

    //USE FOR LOOP WITH AWAIT KEYWORD ENSURE THE ORDER OF THE CREATED PROJECTS AS SAME AS THE ORDER IN SORTPROJECT ARRAY
    for (let i = 0; i < sortProjects.length; i++) {
      const { name, description, deployment_link, tech_stack, index_value } =
        sortProjects[i];
      await Project.create({
        name,
        description,
        deployment_link,
        tech_stack,
        index_value,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//CALLBACK METHOD TO GET ONE DETAILED PROJECT
exports.getOneProject = async function (req, res) {
  const project = await Project.findOne(
    { _id: req.params.id },
    {
      name: 1,
      tech_stack: 1,
      deployment_link: 1,
    }
  );
  res.status(200).json(project);
};

//CALLBACK METHOD TO CREATE A COPY OF A COLLECTION
exports.createCopyCollection = async function () {
  //USE AGGREGATION TO MIGRATE ALL MATCHED DOCUMENTS FROM PROJECTS COLLECTION TO DUPLICATES COLLECTION
  //$OUT OPERATOR WILL CREATE A NEW COLLECTION FROM THE DATA IN MATCH
  //IT WILL REPLACE A COLLECTION IF IT ALREADY EXISTS
  await Project.aggregate([
    {
      $match: {},
    },
    {
      $out: "news",
    },
  ]);
};

//CALLBACK METHOD TO RENAME A COLLECTION
//WE CAN RENAME COLLECTION BY USING MODEL.COLLECTION.RENAME
exports.renameCollection = async function () {
  await Project.collection.rename("news");
};
