export class CustomError extends Error {
  status: number;
  error: string;

  constructor(message: string, status: number, error: string) {
    super(message);
    this.status = status;
    this.error = error;
    Error.captureStackTrace(this, this.constructor);
  }
}
