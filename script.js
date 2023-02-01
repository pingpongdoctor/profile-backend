const Project = require("./models/projectModel");

//FUNCTION TO CREATE A NEW PROJECT
exports.createProject = async () => {
  try {
    const newProject = await Project.create({
      name: "BandSite",
      state: "Finished",
      description:
        "This project is about building a website with the topic of up-and-coming music bands. The website is beautifully designed and responsive on multiple breakpoints.",
      deployment_link: "https://bandsite-platform.netlify.app/",
      tech_stack: {
        frontend: ["JavaScript", "CSS", "HTML", "REST API", "SASS", "BEM"],
      },
      begin_at: new Date("2022-10-01"),
      finish_at: new Date("2022-10-10"),
    });
    console.log(newProject);
  } catch (e) {
    console.log(e);
  }
};
