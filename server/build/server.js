"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const source_map_support_1 = require("source-map-support");
const index_route_1 = require("./routes/index.route");
if (process.env.NODE_ENV !== "production") {
    source_map_support_1.install();
}
const port = 3000;
const app = express();
app.use("/", index_route_1.default);
app.listen(port, () => console.log(`App is running on port: ${port}`));

//# sourceMappingURL=server.js.map
