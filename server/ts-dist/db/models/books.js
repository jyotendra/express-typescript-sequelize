"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineBooks(sequelize, dataTypes) {
    const Book = sequelize.define('Book', {
        Id: dataTypes.UUIDV4,
        Title: dataTypes.STRING
    });
    return Book;
}
exports.defineBooks = defineBooks;
//# sourceMappingURL=books.js.map