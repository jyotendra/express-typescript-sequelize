"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("@models/_index");
function create(author) {
    return _index_1.default.Author.create({
        Id: 1,
        FirstName: 'Surya',
        LastName: 'Reddy',
        Email: 'suryareddy@gmail.com'
    });
}
exports.create = create;
function findAll() {
    return _index_1.default.Author.findAll({ include: [{ all: true }] });
}
exports.findAll = findAll;
//# sourceMappingURL=authors.js.map