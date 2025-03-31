// const express = require("express");
// const { getReferredUsers } = require("../controllers/referralController");

// const router = express.Router();

// router.get("/users/:referralCode", getReferredUsers);

// module.exports = router;

const express = require("express");
const { getReferredUsers } = require("../controllers/referralController");

const router = express.Router();

router.get("/users/:referralCode", getReferredUsers);

module.exports = router;

