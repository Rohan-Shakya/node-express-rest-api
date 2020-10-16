const http = require('http');
const { getProducts } = require('./controllers/productController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
