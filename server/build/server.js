"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const source_map_support_1 = require("source-map-support");
const index_route_1 = require("./routes/index.route");
const _index_model_1 = require("./db/models/_index.model");
if (process.env.NODE_ENV !== "production") {
    source_map_support_1.install();
}
const port = 3000;
(() => __awaiter(this, void 0, void 0, function* () {
    yield _index_model_1.sequelize.sync();
}))();
const app = express();
app.use("/", index_route_1.default);
app.listen(port, () => console.log(`App is running on port: ${port}`));

//# sourceMappingURL=server.js.map
