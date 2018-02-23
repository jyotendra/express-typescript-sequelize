import testRoute from './test';
import * as express from 'express';

const allRoutes = [testRoute]
const apiRoute = express.Router();

apiRoute.use('/api', allRoutes);

export default apiRoute;