const sql = require("../helper/sql");
const logger = require("../helper/logger");

const calculate_charges = async (request) => {
  try {
    const pool = await sql.get_pool();
    const { vehicle_type, distance } = request.body;
    let response = await pool
      .request()
      .input("vehicle_type", vehicle_type)
      .input("distance", distance)
      .execute("sp_calculate_delivery_charge");
    await pool.close();
    return response.recordset[0];
  } catch (error) {
    logger.log_error(error);
  }
};

const book_delivery = async (request) => {
  try {
    const pool = await sql.get_pool();
    const {
      pickup_location,
      drop_location,
      distance,
      delivery_date,
      delivery_type,
      payment_type,
      payment_details,
      amount,
      order_id,
      delivery_details,
      user_id,
      vehicle_type,
    } = request.body;
    let response = await pool
      .request()
      .input("pickup_location", pickup_location)
      .input("drop_location", drop_location)
      .input("distance", distance)
      .input("delivery_date", delivery_date)
      .input("delivery_type", delivery_type)
      .input("payment_type", payment_type)
      .input("payment_details", payment_details)
      .input("order_id", order_id)
      .input("delivery_details", delivery_details)
      .input("user_id", user_id)
      .input("vehicle_type", vehicle_type)
      .execute("sp_book_delivery");
    await pool.close();
    return response.recordset[0];
  } catch (error) {
    logger.log_error(error);
  }
};

const cancel_delivery = async (request) => {
  try {
    const pool = await sql.get_pool();
    const { booking_id, user_id } = request.body;
    let response = await pool
      .request()
      .input("booking_id", booking_id)
      .input("user_id", user_id)
      .execute("sp_cancel_delivery");
    await pool.close();
    return response.recordset[0];
  } catch (error) {
    logger.log_error(error);
  }
};

module.exports = {
  calculate_charges,
  book_delivery,
  cancel_delivery,
};
