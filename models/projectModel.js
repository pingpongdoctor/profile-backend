const mongoose = require("mongoose");

const techStack = mongoose.Schema({
  frontend: [String],
  backend: [String],
});

const projectsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true],
    },

    state: {
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

    begin_at: {
      require: true,
      type: Date,
      immutable: true,
    },

    finish_at: {
      type: Date,
    },
  }
  //AUTOMATICALLY SET THE CREATED AND UPDATED TIME
  // { timestamps: true }
);

module.exports = mongoose.model("Project", projectsSchema);
