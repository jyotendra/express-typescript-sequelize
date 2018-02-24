import authorRoute from "./authors";
import * as express from "express";
import { Router } from "express";

const allRoutes: Array<Router> = [authorRoute];
const apiRoute: Router = express.Router();

apiRoute.use("/api", allRoutes);

export default apiRoute;