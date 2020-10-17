const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;
// const bodyParser = require('body-parser');
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  removeProduct,
} = require('./controllers/productController');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.get('/api/products', (req, res) => {
  getProducts(res);
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  getSingleProduct(id, res);
});

app.post('/api/products', (req, res) => {
  createProduct(req, res);
});

app.put('/api/products/:id', (req, res) => {
  updateProduct(req, res);
});

app.delete('/api/products/:id', (req, res) => {
  removeProduct(req, res);
});

app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
