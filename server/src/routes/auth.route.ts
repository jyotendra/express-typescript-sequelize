import * as express from "express";
import {Router, Response, Request, NextFunction} from "express";
import  { validationResult, Result, check } from "express-validator/check";


import { createNewUser } from "../controllers/auth/sign-up/sign-up.controller";
import { userValidators } from "../validators/user/user.validator";
import { signInUser } from "../controllers/auth/sign-in/sign-in.controller";

const router: Router = Router();

router.post("/sign-in", signInUser);
router.post("/sign-up", userValidators, createNewUser);

export default router;