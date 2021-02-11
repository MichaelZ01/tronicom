import express from 'express'
// File extensions are required for backend import
import data from './data.js';

// Express server is initialised
const app = express();

// Port is either environment variable PORT or is by default 5000
const port = process.env.PORT || 5000;

// :id must be above products as any match will be successfull
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({message: 'Product not found'})
  }
});

// Returns the product database
app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Prints to console what port the server is 
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});