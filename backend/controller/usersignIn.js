const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Import bcryptjs
const Usermodel = require("../model/userModel");

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    console.log(req.body, "req.body signin");

    // Check if both email and password are provided
    if (!email || !password) {
      throw new Error("Please provide email and password");
    }

    // Find the user by email
    const user = await Usermodel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      // If password doesn't match
      return res.status(401).json({
        message: "Invalid credentials",
        error: true,
        success: false,
      });
    }

    // JWT token data payload
    const tokenData = { _id: user._id, email: user.email };

    // Sign the token with the secret key and set an expiration time
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    // Set cookie options
    const tokenOption = {
      httpOnly: true,
      secure: true, // Ensure this is false during development if using http (not https)
    };

    // Send token as cookie and response
    res.cookie("token", token, tokenOption).status(201).json({
      message: "User logged in",
      data: token,
      error: false,
      success: true,
    });
  } catch (error) {
    // Handle errors and send response
    res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
