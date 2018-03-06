"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sign_up_controller_1 = require("../controllers/auth/sign-up/sign-up.controller");
const user_validator_1 = require("../validators/user/user.validator");
const router = express_1.Router();
router.post("/sign-up", user_validator_1.userValidators, sign_up_controller_1.createNewUser);
exports.default = router;

//# sourceMappingURL=auth.route.js.map
