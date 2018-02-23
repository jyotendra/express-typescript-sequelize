import * as express from 'express';
import routers from './routers/index';
import {install as sourceMapInstall} from 'source-map-support';

// console.log(config);


if (process.env.NODE_ENV !== 'production') {
    sourceMapInstall();
}

const port = 3000;

const app = express();

app.use('/', routers);


app.listen(port, () => console.log(`App is running on port: ${port}`));