const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
});
const product = mongoose.model("products", productSchema);

module.exports = product;
