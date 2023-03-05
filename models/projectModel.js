const mongoose = require("mongoose");

const techStack = mongoose.Schema({
  frontend: [String],
  backend: [String],
});

const projectsSchema = mongoose.Schema(
  {
    index_value: {
      type: Number,
      require: [true],
    },
    name: {
      type: String,
      require: [true],
    },

    description: {
      type: String,
      require: [true],
    },

    deployment_link: {
      type: String,
      require: [true],
    },

    tech_stack: techStack,
  }
  //AUTOMATICALLY SET THE CREATED AND UPDATED TIME
  // { timestamps: true }
);
//BECAUSE THE NAME OF THE COLLECTION IS "projects" SO ITS DEFAULT MODEL NAME WILL BE PROJECT
//WE CAN DEFINE AN OTHER NAME IN THE THIRD PARA
module.exports = mongoose.model("Project", projectsSchema);
