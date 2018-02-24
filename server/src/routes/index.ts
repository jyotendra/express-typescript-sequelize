import authorRoute from '@routes/authors';
import * as express from 'express';

const allRoutes = [authorRoute]
const apiRoute = express.Router();

apiRoute.use('/api', allRoutes);

export default apiRoute;