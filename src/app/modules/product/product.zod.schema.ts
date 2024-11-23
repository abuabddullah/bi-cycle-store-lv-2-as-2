import { z } from 'zod';
// Zod Schema for validation
export const productZodSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    errorMap: () => ({
      message: 'Type must be one of Mountain, Road, Hybrid, BMX, or Electric',
    }),
  }),
  description: z.string().optional(),
  quantity: z.number().int().min(0, 'Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});
