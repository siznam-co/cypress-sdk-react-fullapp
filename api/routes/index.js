var express = require("express");
var crypto = require("crypto");
var router = express.Router();

const checkJwt = require("../guard");

router.get("/integry-keys", checkJwt, async function (req, res, next) {
  const appKey = process.env.INTEGRY_APP_KEY;
  const appSecret = process.env.INTEGRY_APP_SECRET;
  const userId = req.user.sub;

  const hash = crypto
    .createHmac("sha256", appSecret)
    .update(userId)
    .digest("hex");

  res.json({
    appKey,
    hash,
    userId,
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
