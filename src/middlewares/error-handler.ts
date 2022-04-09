import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors";
import { ErrorResponse } from "../responses/error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeError());
  }

  return res.status(500).send({
    errors: [
      {
        message: "Internal server error",
      },
    ],
  });
};
