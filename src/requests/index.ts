import { Request } from "express";
import { UserJWTPayload } from "../index";

export interface RequestWithCredential extends Request {
  currentUser?: UserJWTPayload;
}
