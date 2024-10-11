const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please provide first name"],
    },
    lname: {
      type: String,
      required: [true, "please provide last name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model("user", userSchema);

module.exports = Usermodel;
