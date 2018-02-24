"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_dao_1 = require("../../dao/_index.dao");
function getAuthors(req, res) {
    return _index_dao_1.AuthorsDao.findAll()
        .then(authors => res.status(200).send(authors))
        .catch(err => console.log(err));
}
exports.getAuthors = getAuthors;

//# sourceMappingURL=author.get.js.map
