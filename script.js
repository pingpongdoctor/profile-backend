const Project = require("./models/projectModel");

//FUNCTION TO CREATE A NEW PROJECT
exports.createProject = async () => {
  try {
    const newProject = await Project.create({
      name: "Simon Profile",
      description:
        "Simon Profile project is a MERN application that helps you know more about me, take a look at my projects and contact me easily",
      deployment_link: "https://bandsite-platform.netlify.app/",
      tech_stack: {
        frontend: [
          "Node.js, ExpressJS, ReactJS, AOS, React Type Animation,MUI Material, EmailJS, MongoDB + Mongoose, REST API",
        ],
      },
    });

    console.log(newProject);
  } catch (e) {
    console.log(e);
  }
};
