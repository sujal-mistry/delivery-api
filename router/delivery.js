const express = require("express");
const router = express.Router();

const {
  calculate_charges,
  book_delivery,
  cancel_delivery,
} = require("../controller/delivery_controller");

router.route("/calculate-charges").post(calculate_charges);
router.route("/book-delivery").post(book_delivery);
router.route("/cancel-delivery").post(cancel_delivery);

module.exports = router;
