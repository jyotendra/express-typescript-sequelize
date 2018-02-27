import * as express from "express";
import {Router, Response, Request, NextFunction} from "express";
import  { validationResult, Result, check } from "express-validator/check";


import { getAuthors } from "../controllers/author/author.get";
import { authorValidators } from "../validators/author/author.validator";
import { createNewAuthor } from "../controllers/author/author.post";

const router: Router = Router();

router.get("/author", getAuthors);

router.post("/author", authorValidators, createNewAuthor);

export default router;