const express = require("express");
const connect = require("./dbConnection");
const userRoutes = require("./routes/userroutes");
const app = express();
const port = 3000;

connect();

app.use("/api/users", require("./routes/userroutes"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
