const da = require("../data_access/da_delivery");

const book_delivery = async (request, response) => {
  try {
    let data = await da.calculate_charges(request);
    response.status(200).json(data);
  } catch (error) {
    console.log("Error ===> ", error);
    response.status(500).send(error);
  }
};

const calculate_charges = async (request, response) => {
  try {
    let data = await da.calculate_charges(request);
    response.status(200).json(data);
  } catch (error) {
    console.log("Error ===> ", error);
    response.status(500).send(error);
  }
};

module.exports = {
  calculate_charges,
};
