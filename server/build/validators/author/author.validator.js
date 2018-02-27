"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
const _ = require("lodash");
const authorValidatorsObj = {
    check_email: check_1.check("email")
        .isEmail().withMessage("Incorrect email format")
        .trim()
        .normalizeEmail(),
    password: check_1.check("password")
        .isLength({ min: 5, max: 6 })
        .withMessage("Password should have at least 5 characters and at max 6 characters")
};
exports.authorValidators = _.values(authorValidatorsObj);

//# sourceMappingURL=author.validator.js.map
