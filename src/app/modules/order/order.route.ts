import express from 'express';
import { calculateRevenue, createOrder } from './order.controller';

const router = express.Router();

// Order a Bicycle
router.post('/orders', createOrder);

// Calculate Revenue from Orders
router.get('/orders/revenue', calculateRevenue);

export default router;
