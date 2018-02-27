"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_get_1 = require("../controllers/author/author.get");
const author_validator_1 = require("../validators/author/author.validator");
const author_post_1 = require("../controllers/author/author.post");
const router = express_1.Router();
router.get("/author", author_get_1.getAuthors);
router.post("/author", author_validator_1.authorValidators, author_post_1.createNewAuthor);
exports.default = router;

//# sourceMappingURL=author.route.js.map
