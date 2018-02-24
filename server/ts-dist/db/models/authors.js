"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineAuthors(sequelize, dataTypes) {
    const Author = sequelize.define("Author", {
        Id: dataTypes.UUIDV4,
        FirstName: dataTypes.STRING,
        LastName: dataTypes.STRING,
        Email: dataTypes.STRING
    });
    return Author;
}
exports.defineAuthors = defineAuthors;
//# sourceMappingURL=authors.js.map