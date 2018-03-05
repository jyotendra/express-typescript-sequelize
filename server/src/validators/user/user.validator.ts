import { check } from "express-validator/check";
import { sanitize } from "express-validator/filter";
import * as _ from "lodash";

const userValidatorsObj: any = {
  email: check("email")
    .isEmail()
    .withMessage("Email is invalid"),

  password: check("password")
    .isLength({ min: 3, max: 10 })
    .withMessage("password should not be greater than 10 chars or lesser than 3 characters")
};

export const userValidators: Array<any> = _.values(userValidatorsObj);
