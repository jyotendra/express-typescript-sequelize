import * as express from "express";
import {Router, Response, Request, NextFunction} from "express";
import  { validationResult, Result, check } from "express-validator/check";


import { getAuthors } from "../controllers/author/author.get";
import { authorValidators } from "../validators/author/author.validator";

const router: Router = Router();

router.get("/author", getAuthors);

router.post("/author", authorValidators, (req: Request, res: Response, next: NextFunction) => {
    // console.log(authorValidators);
    const errors: Result = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    } else {
        return res.status(200).json({ msg: "Oh Yeah!!"});
    }
});

export default router;