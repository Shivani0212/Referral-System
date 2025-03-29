const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const { name, email, password, referredBy } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const referralCode = Math.random().toString(36).substring(2, 10);
        
        const user = new User({ name, email, password: hashedPassword, referralCode, referredBy });
        await user.save();
        
        res.json({ message: "User registered successfully", referralCode });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token, referralCode: user.referralCode });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};
