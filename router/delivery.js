const express = require("express");
const router = express.Router();

const { calculate_charges } = require("../controller/delivery_controller");

router.route("/calculate-charges").post(calculate_charges);

module.exports = router;
