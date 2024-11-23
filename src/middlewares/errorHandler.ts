import { Request, Response } from 'express';
import { CustomError } from '../utils/customError';

export const errorHandler = (
  err: CustomError | Error,
  req: Request,
  res: Response,
  // next: NextFunction,
) => {
  const status = (err instanceof CustomError && err.status) || 500;
  const errorType = (err instanceof CustomError && err.error) || 'ServerError';

  res.status(status).json({
    message: err.message || 'Something went wrong',
    success: false,
    error: errorType,
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Include stack trace only in development
    stack: err.stack ? err.stack : undefined, // Include stack trace
  });
};
