import { Request } from "express";
import { UserJWTPayload } from "../middlewares";

export interface RequestWithCredential extends Request {
  currentUser?: UserJWTPayload;
}
