const { findSingleProduct } = require('../models/productModel');
const Product = require('../models/productModel');

const getProducts = async (res) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (id, res) => {
  try {
    const product = await Product.findSingleProduct(id);
    return product
      ? res.json(product)
      : res.json({ message: 'Product not found!!' });
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const data = {
      title,
      description,
      price,
    };
    const product = await Product.create(data);
    return res.json(product);
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = findSingleProduct(id);

    if (!product) {
      return res.json({ message: 'Product Not Fount' });
    } else {
      const { title, description, price } = req.body;
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };
      const updatedProduct = await Product.update(id, productData);
      return res.json(updatedProduct);
    }
  } catch (err) {
    console.log(err);
  }
};

const removeProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findSingleProduct(id);

    if (!product) {
      return res.json({ message: 'Product Not Found' });
    } else {
      await Product.remove(id);
      return res.json({ message: `Product ID: ${id} removed!!` });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  removeProduct,
};
