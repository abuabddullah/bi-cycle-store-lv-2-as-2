import ProductModel from '../product/product.model';
import { IOrder } from './order.interface';
import OrderModel from './order.model';
import { orderValidationSchema } from './order.zod.schema';

// Order a Bicycle
export const createOrderService = async (orderData: IOrder) => {
  // Validate incoming data
  const parsedOrderData = orderValidationSchema.parse(orderData);
  const { email, product, quantity, totalPrice } = parsedOrderData;

  // Check if the product exists
  const productDetails = await ProductModel.findById(product);
  if (!productDetails) {
    throw new Error('Product not found');
  }

  // Check if sufficient stock is available
  if (productDetails.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  // Adjust inventory
  productDetails.quantity -= quantity;
  productDetails.inStock = productDetails.quantity > 0;
  await productDetails.save();

  // Create the order
  const order = await OrderModel.create({
    email,
    product,
    quantity,
    totalPrice,
  });

  return {
    message: 'Order created successfully',
    success: true,
    data: order,
  };
};

// Calculate Revenue from Orders
export const calculateRevenueService = async () => {
  const revenueAggregation = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$totalPrice', 1] } }, // Multiplying ensures totalPrice is summed
      },
    },
  ]);

  const totalRevenue = revenueAggregation[0]?.totalRevenue || 0;
  return totalRevenue;
};
