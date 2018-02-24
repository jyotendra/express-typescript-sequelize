"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_model_1 = require("../db/models/_index.model");
function create(author) {
    return _index_model_1.default.Author.create({
        firstName: "Surya",
        lastName: "Reddy",
        email: "suryareddy@gmail.com"
    });
}
exports.create = create;
function findAll() {
    return _index_model_1.default.Author.findAll({ include: [{ all: true }] });
}
exports.findAll = findAll;

//# sourceMappingURL=author.dao.js.map
