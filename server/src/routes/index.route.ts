import authorRoute from "./author.route";
import authRoute from "./auth.route";
import * as express from "express";
import { Router } from "express";

const allRoutes: Array<Router> = [authorRoute, authRoute];
const apiRoute: Router = express.Router();

apiRoute.use("/api", allRoutes);

export default apiRoute;