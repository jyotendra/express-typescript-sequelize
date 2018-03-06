"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_dao_1 = require("../../dao/_index.dao");
const check_1 = require("express-validator/check");
function createNewAuthor(req, res) {
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    return _index_dao_1.AuthorsDao.createAuthor(req.body)
        .then(author => res
        .status(200)
        .send({ author: author, message: "Author created successfully" }))
        .catch(err => console.log(err));
}
exports.createNewAuthor = createNewAuthor;

//# sourceMappingURL=author.post.js.map
