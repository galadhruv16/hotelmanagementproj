const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("Hello World! DHRUV G");
});
router.post("/create", (req, res) => {
  console.log(req);
  res.send("HELLO DHRUV G");
});

module.exports = router;
