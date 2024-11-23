# Bi-Cycle store

Features of application and instructions on setting up the project locally.

---

## Features

### Product Management

1. **Create a Bicycle**  
   To Add new bicycles to the inventory with details like name, brand, price, type, description, quantity, and availability.

2. **View All Bicycles**  
   To Retrieve a list of all bicycles in the inventory with filtering options.

3. **Get a Specific Bicycle**  
   To Retrieve details of a bicycle by its ID.

4. **Update a Bicycle**  
   To Update details such as price and quantity of a bicycle.

5. **Delete a Bicycle**  
   To Remove a bicycle from the inventory.

---

### Order Management

1. **Place an Order**  
   Customers can place orders for bicycles. The system automatically adjusts inventory and validates stock availability.

2. **Calculate Revenue**  
   To Generate the total revenue from all orders using aggregation.

---

## Getting Started

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/abuabddullah/bi-cycle-store-lv-2-as-2.git
   cd bi-cycle-store-lv-2-as-2
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and configure the following variables:

   ```env
    NODE_ENV=development
    PORT=5000
    DATABASE_URL=mongodb+srv://asifaowadud:sof6vxfRNfUEvdCg@cluster0.gjcwx8p.mongodb.net/bi-cycle-store?retryWrites=true&w=majority&appName=Cluster0
   ```

4. **Run the Application**

   ```bash
   npm run start:dev
   ```

   The application will be available at [http://localhost:5000](http://localhost:5000).

---

### API Endpoints

#### Product Endpoints

1. **Create a Bicycle**  
   `POST /api/products`  
   **Request Body:**

   ```json
   {
     "name": "Roadster 5000",
     "brand": "SpeedX",
     "price": 300,
     "type": "Road",
     "description": "A premium road bike designed for speed and performance.",
     "quantity": 20,
     "inStock": true
   }
   ```

2. **Get All Bicycles**  
   `GET /api/products`

3. **Get a Specific Bicycle**  
   `GET /api/products/:productId`

4. **Update a Bicycle**  
   `PUT /api/products/:productId`

5. **Delete a Bicycle**  
   `DELETE /api/products/:productId`

#### Order Endpoints

1. **Create an Order**  
   `POST /api/orders`  
   **Request Body:**

   ```json
   {
     "email": "customer@example.com",
     "product": "648a45e5f0123c45678d9012",
     "quantity": 2,
     "totalPrice": 600
   }
   ```

2. **Calculate Revenue**  
   `GET /api/orders/revenue`

---

### Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Validation:** Zod
- **ORM:** Mongoose

---
