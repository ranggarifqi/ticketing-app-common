import { CustomError } from "./custom-error";
import { ErrorResponse } from "../responses/error";

const DEFAULT_MSG = "You cannot access protected resources";

export class ForbiddenError extends CustomError {
  public statusCode: number = 403;
  public message: string;

  constructor(msg?: string) {
    super(msg ?? DEFAULT_MSG);
    this.message = msg ?? DEFAULT_MSG;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeError = (): ErrorResponse => {
    return {
      errors: [
        {
          message: this.message,
        },
      ],
    };
  };
}
