import * as express from "express";
import { Express } from "express";
import {install as sourceMapInstall} from "source-map-support";

import routes from "./routes/index";

// console.log(config);


if (process.env.NODE_ENV !== "production") {
    sourceMapInstall();
}

const port: number = 3000;

const app: Express = express();

app.use("/", routes);


app.listen(port, () => console.log(`App is running on port: ${port}`));