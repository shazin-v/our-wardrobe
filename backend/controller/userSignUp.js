const bcrypt = require("bcryptjs"); // Import bcryptjs
const Usermodel = require("../model/userModel");

async function userSignUpController(req, res) {
  try {
    const { fname, lname, email, password } = req.body;

    console.log("req.body", req.body);

    // Check if all required fields are provided
    if (!fname || !lname || !email || !password) {
      return res.json({
        message: "Please fill all the fields",
        error: true,
        success: false,
      });
    }

    // Check if user with the provided email already exists
    const existingUser = await Usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
        error: true,
        success: false,
      });
    }

    // Hash the password before saving the user
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    // Create the user object with the hashed password
    const userData = new Usermodel({
      fname,
      lname,
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Save the user to the database
    const saveUser = await userData.save();

    // Respond with success
    res.status(201).json({
      message: "User created successfully",
      error: false,
      success: true,
      data: saveUser,
    });
  } catch (error) {
    // Handle errors
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
