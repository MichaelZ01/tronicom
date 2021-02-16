import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// File extensions are required for backend import
import productRouter from './Routers/productRouter.js';
import userRouter from './Routers/userRouter.js';

// Express server is initialised
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
mongoose.connect(process.env.MONGODB_RUL || 'mongodb://localhost/tronicom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

// Port is either environment variable PORT or is by default 5000
const port = process.env.PORT || 5000;

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

// Prints to console what port the server is 
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});