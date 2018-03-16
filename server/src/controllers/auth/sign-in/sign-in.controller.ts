import { Request, Response, NextFunction } from "express";
import * as Bluebird from "bluebird";
import * as sequelize from "sequelize";

import { UserDao } from "../../../dao/_index.dao";
import { saveToken } from "../../../dao/access-token.dao";
import { Result, validationResult } from "express-validator/check";
import { ISeqlzErrorObject } from "../../../utils/interfaces/sqlzError.interface";
import { generateToken, validateToken } from "../../../utils/jwt.util";


export function signInUser(
  req: Request,
  res: Response,
  next: NextFunction
): Response | Bluebird<any> {
  const errors: Result = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }
  UserDao.signinUser(req.body).then(user => {
    if(!user) {
      return res.status(400).json({
        error: "User not found"
      });
    };
    const newModel = { userId: user.id, email: user.email };
    generateToken(newModel).then((token: string) => {
      saveToken(Object.assign({}, newModel ,{accessToken: token}));
      res.json(token);
    });
  });
}

export function checkValidity(req: Request, res: Response, next: NextFunction) {
  const encodedToken = req.headers["access-token"] as string;
  console.log("thats encoded token", encodedToken);
  validateToken(encodedToken)
    .then((result: any) => {
      next()
    })
    .catch((err: any) => {
      return res.status(201).json({error: 201, message: "Unauthorized access"});
    })
}
