"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_get_1 = require("../controllers/author/author.get");
const router = express_1.Router();
router.get("/author", author_get_1.getAuthors);
exports.default = router;

//# sourceMappingURL=authors.js.map
