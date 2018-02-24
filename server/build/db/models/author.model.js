"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineAuthors(sequelize, dataTypes) {
    const Author = sequelize.define("Author", {
        firstName: dataTypes.STRING,
        lastName: dataTypes.STRING,
        email: dataTypes.STRING
    });
    return Author;
}
exports.default = defineAuthors;

//# sourceMappingURL=author.model.js.map
