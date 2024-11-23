import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from './product.controller';

const router = express.Router();

// Create a Bicycle
router.post('/products', createProduct);

// Get All Bicycles
router.get('/products', getAllProducts);

// Get a Specific Bicycle
router.get('/products/:productId', getProductById);

// Update a Bicycle
router.put('/products/:productId', updateProduct);

// Delete a Bicycle
router.delete('/products/:productId', deleteProduct);

export default router;
