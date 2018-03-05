"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const author_model_1 = require("./author.model");
const user_model_1 = require("./user.model");
const config = require("../../../config/database.json");
const dbConfig = config.development;
exports.sequelize = new sequelize_typescript_1.Sequelize(Object.assign({}, dbConfig));
exports.sequelize.addModels([author_model_1.default, user_model_1.default]);

//# sourceMappingURL=_index.model.js.map
