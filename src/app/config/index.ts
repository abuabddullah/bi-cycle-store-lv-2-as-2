import dotenv from 'dotenv';
import path from 'path';

// Load .env file if it exists
dotenv.config({ path: path.join((process.cwd(), '.env')) });

// export environment variables in a single object to resue
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
