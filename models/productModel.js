let products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

const findSingleProduct = (id) => {
  return new Promise((resolve, reject) => {
    const productJSON = products.find((p) => p.id === id);
    resolve(productJSON);
  });
};

const create = (product) => {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    fs.writeFileSync(
      './data/products.json',
      JSON.stringify([...products, newProduct]),
      'utf8'
    );
    resolve(newProduct);
  });
};

const update = (id, product) => {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = {
      id,
      ...product,
    };
    fs.writeFileSync(
      './data/products.json',
      JSON.stringify([...products]),
      'utf8'
    );
    resolve(products[index]);
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    const newProducts = products.filter((p) => p.id !== id);
    fs.writeFileSync(
      './data/products.json',
      JSON.stringify([...newProducts]),
      'utf8'
    );
    resolve();
  });
};

module.exports = {
  findAll,
  findSingleProduct,
  create,
  update,
  remove,
};
