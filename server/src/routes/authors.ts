import * as express from "express";
import {Router} from "express";
import { getAuthors } from "../controllers/author/author.get";

const router: Router = Router();

router.get("/author", getAuthors);

export default router;