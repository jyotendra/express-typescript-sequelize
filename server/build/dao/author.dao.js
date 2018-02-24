"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = require("../db/models/author.model");
function findAll() {
    return author_model_1.default.findAll();
}
exports.findAll = findAll;

//# sourceMappingURL=author.dao.js.map
