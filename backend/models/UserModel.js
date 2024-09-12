const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
