import cors from 'cors';
import express, { Application } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

// testing
app.get('/', async (req, res) => {
  res.send('Hello World!');
});

// invalid route
app.get('*', (req, res) => {
  res.send('Invalid route');
});

export default app;
