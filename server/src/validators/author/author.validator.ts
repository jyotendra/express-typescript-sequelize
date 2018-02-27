import { check } from "express-validator/check";
import { sanitize } from "express-validator/filter";
import * as _ from "lodash";

const authorValidatorsObj: any = {
  firstName: check("firstName")
    .isLength({ min: 3, max: 10 })
    .withMessage("firstName should not be greater than 10 chars"),

  lastName: check("lastName")
    .isLength({ min: 3, max: 10 })
    .withMessage("firstName should not be greater than 10 chars"),

  email: check("email")
    .isEmail()
    .withMessage("Email is invalid")
};

export const authorValidators: Array<any> = _.values(authorValidatorsObj);
