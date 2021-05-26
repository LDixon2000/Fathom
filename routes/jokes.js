const jokes = require("../controller/appController");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const joke = await jokes();
  console.log(JSON.parse(joke)[0]);
  res.send(JSON.parse(joke)[0]);
});

module.exports = router;
