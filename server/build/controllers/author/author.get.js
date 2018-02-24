"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../../dao/_index");
function getAuthors(req, res) {
    return _index_1.AuthorsDao.findAll()
        .then(authors => res.status(200).send(authors))
        .catch(err => console.log(err));
}
exports.getAuthors = getAuthors;

//# sourceMappingURL=author.get.js.map
