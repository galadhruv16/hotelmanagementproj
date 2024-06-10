const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   console.log("Connecting");
//   await mongoose.connect(
//     "mongodb+srv://dhruv:dhruv@cluster0.rtmrbcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   );
//   console.log("Connected");

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

const connection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://dhruv:dhruv@cluster0.rtmrbcs.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(conn.connection.name);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connection;
