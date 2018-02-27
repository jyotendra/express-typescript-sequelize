import * as express from "express";
import { Express } from "express";
import {install as sourceMapInstall} from "source-map-support";
import * as bodyParser from "body-parser";

import routes from "./routes/index.route";
import { sequelize } from "./db/models/_index.model";

// console.log(config);


if (process.env.NODE_ENV !== "production") {
    sourceMapInstall();
}

const port: number = 3000;

(async () => {
    await sequelize.sync();
})();

const app: Express = express();

app.use(bodyParser.json());
app.use("/", routes);


app.listen(port, () => console.log(`App is running on port: ${port}`));