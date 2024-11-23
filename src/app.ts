import cors from 'cors';
import express, { Application } from 'express';
import ProductRoutes from './app/modules/product/product.route';
import OrderRoutes from './app/modules/order/order.route';
import { errorHandler } from './middlewares/errorHandler';
import { CustomError } from './utils/customError';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', ProductRoutes);
app.use('/api', OrderRoutes);

// testing
app.get('/', async (req, res) => {
  res.send('Hello World!');
});

// Simulate a route not found
app.use('*', (req, res, next) => {
  next(new CustomError('Resource not found', 404, 'NotFoundError'));
});

// Error Middleware
app.use(errorHandler);

export default app;
