const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Make 'name' required
    email: { type: String, required: true, unique: true }, // Email must be unique
    password: { type: String, required: true },
    referralCode: { type: String, unique: true }, // Ensure referralCode is unique
    referredBy: { type: String } // Optional field (who referred the user)
});

module.exports = mongoose.model("User", userSchema);

