import * as express from "express";
import {Router, Response, Request, NextFunction} from "express";
import  { validationResult, Result, check } from "express-validator/check";


import { createNewUser } from "../controllers/auth/sign-up/sign-up.controller";
import { userValidators } from "../validators/user/user.validator";

const router: Router = Router();

router.post("/sign-up", userValidators, createNewUser);

export default router;