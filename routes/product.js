var express = require("express");
var router = express.Router();
const productController = require("./../controllers/productController");
const brandController = require("./../controllers/brandController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("product");
});
router.route("/").post(productController.createProduct);
// .get(productController.getAllProduct);

router.route("/brand").post(brandController.createBrand);
//router.route("/:id").get(productController.getProduct);
module.exports = router;
