"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineTags(sequelize, dataTypes) {
    const Tag = sequelize.define("Tag", {
        Id: dataTypes.UUIDV4,
        Title: dataTypes.STRING
    });
    return Tag;
}
exports.default = defineTags;

//# sourceMappingURL=tags.js.map
