require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoute = require("./routes/projectRoute");
const PORT = process.env.PORT || 8080;
const {
  addIndexValue,
  createProject,
  updateIndexValue,
  sortDocumentsBasedOnIndexValue,
  renameCollection,
  createCopyFromProjects,
} = require("./controllers/projectController");

// sortDocumentsBasedOnIndexValue();

// createCopyFromProjects();
//USE MIDDLEWARES
app.use(cors());
app.set("trust proxy", 1);
app.use(express.json());

//CONNECT DATABASE
connectDB();

app.use("/projects", projectRoute);
//TEST THE SERVER
app.listen(PORT, (req, res) => {
  console.log(`Running webstie at http://localhost:${PORT}`);
});
