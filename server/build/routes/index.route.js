"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_route_1 = require("./author.route");
const auth_route_1 = require("./auth.route");
const express = require("express");
const allRoutes = [author_route_1.default, auth_route_1.default];
const apiRoute = express.Router();
apiRoute.use("/api", allRoutes);
exports.default = apiRoute;

//# sourceMappingURL=index.route.js.map
