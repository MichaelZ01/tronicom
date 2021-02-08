import express from 'express'

// File extensions are required for backend import
import data from './data.js';

// Express server is initialised
const app = express();

// Port is either environment variable PORT or is by default 5000
const port = process.env.PORT || 5000;

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