import { IProduct } from './product.interface';
import ProductModel from './product.model';
import { productZodSchema } from './product.zod.schema';

// Create a Bicycle
export const createProductService = async (productData: IProduct) => {
  // Validate using Zod
  const validatedData = productZodSchema.parse(productData);

  // Save to the database
  const product = await ProductModel.create(validatedData);

  return product;
};

// Get All Bicycles
export const getAllProductsService = async (searchTerm?: string) => {
  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { type: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};

  const products = await ProductModel.find(query);
  return products;
};

// Get a Specific Bicycle
export const getProductByIdService = async (productId: string) => {
  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new Error('Bicycle not found');
  }
  return product;
};

// Update a Bicycle
export const updateProductService = async (
  productId: string,
  updates: Partial<IProduct>,
) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productId,
    updates,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validations are run
    },
  );

  if (!updatedProduct) {
    throw new Error('Bicycle not found');
  }

  return updatedProduct;
};

// Delete a Bicycle
export const deleteProductService = async (productId: string) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(productId);
  if (!deletedProduct) {
    throw new Error('Bicycle not found');
  }
};
