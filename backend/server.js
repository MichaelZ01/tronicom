import express from 'express'
// Extension is required for import
import data from './data.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});