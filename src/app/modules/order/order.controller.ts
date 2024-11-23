import { NextFunction, Request, Response } from 'express';
import { calculateRevenueService, createOrderService } from './order.service';

// Order a Bicycle
export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await createOrderService(req.body);
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// Calculate Revenue from Orders
export const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const totalRevenue = await calculateRevenueService();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error) {
    next(error);
  }
};
