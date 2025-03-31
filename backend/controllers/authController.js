const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const { name, email, password, referredBy } = req.body; // Allow referredBy in request

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Username, email, and password are required." });
        }

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered." });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate referral code for the new user
        const referralCode = Math.random().toString(36).substring(2, 8);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,  // Store hashed password
            referralCode,
            referredBy: referredBy || null // Store referral code if user was referred
        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            referralCode: referralCode
        });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password"); // Exclude passwords for security
        res.json(users);
    } catch (error) {
        console.error("Get Users Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found:", email);
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            console.log("Password mismatch for:", email);
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.json({ token });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
