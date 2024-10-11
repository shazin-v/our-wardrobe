const Usermodel = require("../model/userModel");

async function userSignUpController(req, res) {
  // TODO: password hash
  try {
    const { fname, lname, email, password } = req.body;

    console.log("req.body", req.body);

    if (!fname || !lname || !email || !password) {
      return res.json({
        message: "Please fill all the fields",
        error: true,
        success: false,
      });
    }

    const existingUser = await Usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
        error: true,
        success: false,
      });
    }

    const userData = new Usermodel(req.body);
    const saveUser = await userData.save();

    res.status(201).json({
      message: "User created successfully",
      error: false,
      success: true,
      data: saveUser,
    });
  } catch (error) {
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
