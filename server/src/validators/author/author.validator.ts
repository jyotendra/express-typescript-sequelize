import {check} from "express-validator/check";
import {sanitize} from "express-validator/filter";
import * as _ from "lodash";


const authorValidatorsObj: any = {
    check_email: check("email")
        .isEmail().withMessage("Incorrect email format")
        .trim()
        .normalizeEmail(),

    password: check("password")
        .isLength({min: 5, max: 6})
        .withMessage("Password should have at least 5 characters and at max 6 characters")
};

export const authorValidators: Array<any> = _.values(authorValidatorsObj);
