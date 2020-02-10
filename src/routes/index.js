const express = require("express");
const facebookRoutes = require("./facebook");

const router = express.Router({ mergeParams: true });

router.use("/facebook", facebookRoutes);

module.exports = router;
