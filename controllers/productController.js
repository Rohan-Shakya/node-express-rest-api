const Product = require('../models/productModel');

// Get all products
// GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Content-Type': 'application/json' }); // res.statusCode() + res.setHeader()
    res.end(JSON.stringify(products)); // res.write() + res.end()
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
};
