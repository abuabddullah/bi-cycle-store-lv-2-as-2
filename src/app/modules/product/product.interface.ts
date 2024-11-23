export enum BicycleType {
  Mountain = 'Mountain',
  Road = 'Road',
  Hybrid = 'Hybrid',
  BMX = 'BMX',
  Electric = 'Electric',
}

export interface IProduct {
  name: string; // The name of the bicycle
  brand: string; // The brand of the bicycle
  price: number; // Price of the bicycle
  type: BicycleType; // The type of bicycle, restricted to the BicycleType enum
  description: string; // A brief description of the bicycle
  quantity: number; // Quantity of the bicycle available
  inStock: boolean; // Indicates if the bicycle is in stock
}
