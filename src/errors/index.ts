import { ErrorResponse } from "../responses/error";
export * from "./bad-request-error";
export * from "./database-connection-error";
export * from "./not-found-error";
export * from "./request-validation-error";
export * from "./unauthorized-error";

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): ErrorResponse;
}
