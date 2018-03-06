import { promisify, promisifyAll } from "bluebird";
import * as jwtSync from "jsonwebtoken";

export const jwt: any = promisifyAll(jwtSync);

const appConfig: any = require("../../config/appConfig.json");
const cert: string = appConfig.appKey;


export function generateToken(model: any): any {
  return jwt.signAsync(model, cert, { expiresIn: "1h" });
}

export function validateToken(accessToken: string): any {
  return jwt.verifyAsync(accessToken, cert);
}
