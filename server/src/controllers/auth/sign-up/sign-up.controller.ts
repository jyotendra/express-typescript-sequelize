import { Request, Response, NextFunction } from "express";
import * as Bluebird from "bluebird";
import { UserDao } from "../../../dao/_index.dao";
import { Result, validationResult  } from "express-validator/check";
import { getHash } from "../../../utils/bcrypter.util";
import * as sequelize from "sequelize";
import { ISeqlzErrorObject } from "../../../utils/interfaces/sqlzError.interface";



export function createNewUser(req: Request, res: Response, next: NextFunction): Response | Bluebird<any> {
  const errors: Result = validationResult (req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  return getHash(req.body.password).then((hash: string) => {
    const newUserObj: any = {
        email: req.body.email,
        passwordHash: hash
    };
    return UserDao.createUser(newUserObj)
    .then((user: any) =>
      res
        .status(200)
        .send({ author: user, message: "User created successfully" })
    )
    .catch((err: any) => {
        if (err instanceof sequelize.Error) {
            // handle more instances of sequelize specific errors here
            if(err.name ===  "SequelizeUniqueConstraintError") {
                const newErrorObj: ISeqlzErrorObject = {
                    errorCode: 400,
                    message: "Email already exists"
                };
                return res.json(newErrorObj);
            }
        }
    });
  });

}
