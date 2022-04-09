import { Request } from "express";
import { UserJWTPayload } from "../../middlewares/jwt-auth";

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserJWTPayload;
    }
  }
}
