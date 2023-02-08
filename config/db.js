const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb://localhost/test"; //SET THE DEFAULT VALUE FOR URI

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(uri);
    console.log(conn.connection.host);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
