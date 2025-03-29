const User = require("../models/User");

exports.getReferredUsers = async (req, res) => {
    try {
        const users = await User.find({ referredBy: req.params.referralCode });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching referrals", error });
    }
};
