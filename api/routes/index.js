var express = require("express");
var router = express.Router();

const checkJwt = require("../guard");

router.get("/integry-keys", checkJwt, function (req, res, next) {
  console.log(req.user);
  res.json({
    appKey: "",
    appSecret: "",
    hash: "",
    userId: "",
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
