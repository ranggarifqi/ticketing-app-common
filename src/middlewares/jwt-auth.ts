import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { UnauthorizedError } from "../errors/unauthorized-error";
import { RequestWithCredential } from "../requests";

export interface UserJWTPayload {
  id: string;
  email: string;
}

export const jwtAuth = (
  req: RequestWithCredential,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    throw new UnauthorizedError();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_SECRET!
    ) as UserJWTPayload;

    req.currentUser = payload;
  } catch (error) {
    throw new UnauthorizedError();
  }
  next();
};
