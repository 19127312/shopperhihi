const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email_address: String,
  phone: String,
  address: String,
});
const user = mongoose.model("User", userSchema);

module.exports = user;
