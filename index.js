require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoute = require("./routes/projectRoute");
const { createProject } = require("./script");
const PORT = process.env.PORT || 8080;
//CONNECT DATABASE
connectDB();
createProject();
//USE MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/projects", projectRoute);
//TEST THE SERVER
app.listen(PORT, (req, res) => {
  console.log(`Running webstie at http://localhost:${PORT}`);
});
