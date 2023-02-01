const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb://localhost/test"; //SET THE DEFAULT VALUE FOR URI

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true); //AVOID RETURNING ALL DOCUMENTS WHEN RECEIVING AN EMPTY QUERY
    const conn = await mongoose.connect(uri);
    console.log(conn.connection.host);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
