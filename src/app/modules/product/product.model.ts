import { Schema, model } from 'mongoose';
import { BicycleType, IProduct } from './product.interface';

// Mongoose Schema
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      required: true,
      enum: Object.values(BicycleType),
    },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  },
);

// Create Mongoose Model
const ProductModel = model<IProduct>('Product', productSchema);

export default ProductModel;
