const da = require("../data_access/da_delivery");

const book_delivery = async (request, response) => {
  try {
    let data = await da.book_delivery(request);
    response.status(200).json(data);
  } catch (error) {
    logger.log_error(error);
    response.status(500).send(error);
  }
};

const calculate_charges = async (request, response) => {
  try {
    let data = await da.calculate_charges(request);
    response.status(200).json(data);
  } catch (error) {
    logger.log_error(error);
    response.status(500).send(error);
  }
};

const cancel_delivery = async (request, response) => {
  try {
    let data = await da.cancel_delivery(request);
    response.status(200).json(data);
  } catch (error) {
    logger.log_error(error);
    response.status(500).send(error);
  }
};

module.exports = {
  calculate_charges,
  book_delivery,
  cancel_delivery,
};
