"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineTags(sequelize, dataTypes) {
    const Tag = sequelize.define("Tag", {
        title: dataTypes.STRING
    }, {
        freezeTableName: true
    });
    return Tag;
}
exports.default = defineTags;

//# sourceMappingURL=tag.model.js.map
