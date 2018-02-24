"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authors_1 = require("./authors");
const express = require("express");
const allRoutes = [authors_1.default];
const apiRoute = express.Router();
apiRoute.use("/api", allRoutes);
exports.default = apiRoute;

//# sourceMappingURL=index.js.map
