const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    referralCode: String,
    referredBy: String,  // Referral code of inviter
});

module.exports = mongoose.model("User", userSchema);
