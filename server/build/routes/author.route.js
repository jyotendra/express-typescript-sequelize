"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const author_get_1 = require("../controllers/author/author.get");
const author_validator_1 = require("../validators/author/author.validator");
const router = express_1.Router();
router.get("/author", author_get_1.getAuthors);
router.post("/author", author_validator_1.authorValidators, (req, res, next) => {
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    else {
        return res.status(200).json({ msg: "Oh Yeah!!" });
    }
});
exports.default = router;

//# sourceMappingURL=author.route.js.map
