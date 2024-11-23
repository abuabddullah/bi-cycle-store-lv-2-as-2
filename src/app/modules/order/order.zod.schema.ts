import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  product: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: 'Invalid product ID format (must be a MongoDB ObjectID)',
    }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' }),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be a positive number' }),
});

export type OrderValidationType = z.infer<typeof orderValidationSchema>;
