const sql = require("../helper/sql");

const calculate_charges = async (request) => {
  try {
    const pool = await sql.get_pool();
    let response = await pool.request().execute("get_name");
    await pool.close();
    return response.recordset[0];
  } catch (error) {
    console.log("Error ===>", error);
  }
};

module.exports = {
  calculate_charges,
};
