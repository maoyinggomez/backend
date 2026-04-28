import express from 'express';
import cors from 'cors';
import routes from './routes/dishRoutes.js';
import { createTable } from './models/dishModel.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/dishes', routes);

createTable();

app.listen(3000, () => console.log('Server running on port 3000'));
