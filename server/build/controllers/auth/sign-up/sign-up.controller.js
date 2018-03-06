"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_dao_1 = require("../../../dao/_index.dao");
const check_1 = require("express-validator/check");
const bcrypter_util_1 = require("../../../utils/bcrypter.util");
const sequelize = require("sequelize");
function createNewUser(req, res, next) {
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    return bcrypter_util_1.getHash(req.body.password).then((hash) => {
        const newUserObj = {
            email: req.body.email,
            passwordHash: hash
        };
        return _index_dao_1.UserDao.createUser(newUserObj)
            .then((user) => res
            .status(200)
            .send({ author: user, message: "User created successfully" }))
            .catch((err) => {
            if (err instanceof sequelize.Error) {
                if (err.name === "SequelizeUniqueConstraintError") {
                    const newErrorObj = {
                        errorCode: 400,
                        message: "Email already exists"
                    };
                    return res.json(newErrorObj);
                }
            }
        });
    });
}
exports.createNewUser = createNewUser;

//# sourceMappingURL=sign-up.controller.js.map
