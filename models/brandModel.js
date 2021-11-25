const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: [String],
});
const brand = mongoose.model("Brand", brandSchema);

module.exports = brand;
