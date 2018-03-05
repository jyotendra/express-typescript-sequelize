"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
const _ = require("lodash");
const userValidatorsObj = {
    email: check_1.check("email")
        .isEmail()
        .withMessage("Email is invalid"),
    password: check_1.check("password")
        .isLength({ min: 3, max: 10 })
        .withMessage("password should not be greater than 10 chars or lesser than 3 characters")
};
exports.userValidators = _.values(userValidatorsObj);

//# sourceMappingURL=user.validator.js.map
