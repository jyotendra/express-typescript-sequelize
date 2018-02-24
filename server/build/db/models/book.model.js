"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineBooks(sequelize, dataTypes) {
    const Book = sequelize.define("Book", {
        title: dataTypes.STRING
    });
    return Book;
}
exports.default = defineBooks;

//# sourceMappingURL=book.model.js.map
