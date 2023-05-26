import 'reflect-metadata';
import './shared/container';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import AppError from './shared/errors/AppError';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal Server Error - ${err.message}`
    });
  }
);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
