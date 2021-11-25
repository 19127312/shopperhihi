var express = require("express");
var router = express.Router();
const productController = require("./../controllers/userController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login");
});
router.route("/").post(productController.createUser);

module.exports = router;
