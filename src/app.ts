import express, { Request, Response, NextFunction, Express } from 'express';
import userRoutes from './api/v1/routes/userRoutes';
import adminRoutes from './api/v1/routes/adminRoutes';
import errorHandler from './api/v1/middleware/errorHandler';

const app: Express = express();
app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);

app.use(errorHandler);

export default app;
