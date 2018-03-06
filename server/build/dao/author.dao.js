"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = require("../db/models/author.model");
function getAllAuthors() {
    return author_model_1.default.findAll();
}
exports.getAllAuthors = getAllAuthors;
function createAuthor(model) {
    try {
        const author = author_model_1.default.build(model);
        return author.save();
    }
    catch (ex) {
        console.log("Error occurred while saving authors");
    }
}
exports.createAuthor = createAuthor;

//# sourceMappingURL=author.dao.js.map
