import * as express from "express";
import { Router, Response, Request, NextFunction } from "express";
import { validationResult, Result, check } from "express-validator/check";

import { getAuthors } from "../controllers/author/author.get";
import { authorValidators } from "../validators/author/author.validator";
import { createNewAuthor } from "../controllers/author/author.post";
import { checkValidity } from "../controllers/auth/sign-in/sign-in.controller";

const router: Router = Router();

router.get("/author",checkValidity, getAuthors);

router.post("/author", checkValidity, authorValidators, createNewAuthor);

export default router;
