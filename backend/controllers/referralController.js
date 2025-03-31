// const User = require("../models/User");

// exports.getReferredUsers = async (req, res) => {
//     try {
//         const users = await User.find({ referredBy: req.params.referralCode });
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching referrals", error });
//     }
// };

const User = require("../models/User");

exports.getReferredUsers = async (req, res) => {
    try {
        const referralCode = req.params.referralCode;
        const users = await User.find({ referredBy: referralCode }); // Ensure this is correct

        if (!users.length) {
            return res.status(404).json({ message: "No referrals found." });
        }

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching referrals", error });
    }
};

