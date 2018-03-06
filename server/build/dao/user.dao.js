"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../db/models/user.model");
function createUser(model) {
    try {
        const author = user_model_1.default.build(model);
        return author.save();
    }
    catch (ex) {
        console.log("Error occurred while saving authors");
    }
}
exports.createUser = createUser;

//# sourceMappingURL=user.dao.js.map
