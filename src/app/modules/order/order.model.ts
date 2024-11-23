import mongoose, { Schema } from 'mongoose';
import { IOrder } from './order.interface';

// Mongoose Schema for Order
const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

// Create Mongoose Model
const OrderModel = mongoose.model<IOrder>('Order', orderSchema);

export default OrderModel;
