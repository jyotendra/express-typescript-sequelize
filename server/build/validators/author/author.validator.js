"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
const _ = require("lodash");
const authorValidatorsObj = {
    firstName: check_1.check("firstName")
        .isLength({ min: 3, max: 10 })
        .withMessage("firstName should not be greater than 10 chars"),
    lastName: check_1.check("lastName")
        .isLength({ min: 3, max: 10 })
        .withMessage("firstName should not be greater than 10 chars"),
    email: check_1.check("email")
        .isEmail()
        .withMessage("Email is invalid")
};
exports.authorValidators = _.values(authorValidatorsObj);

//# sourceMappingURL=author.validator.js.map
