import { Request, Response, NextFunction } from 'express';
import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
} from './product.service';

// Create a Bicycle
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await createProductService(req.body);
    res.status(201).json({
      message: 'Bicycle created successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Bicycles
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await getAllProductsService(
      req.query.searchTerm as string,
    );
    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Get a Specific Bicycle
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await getProductByIdService(req.params.productId);
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Update a Bicycle
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await updateProductService(req.params.productId, req.body);
    res.status(200).json({
      message: 'Bicycle updated successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a Bicycle
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteProductService(req.params.productId);
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
