import { Request, Response } from "express";
import * as Bluebird from "bluebird";
import { AuthorsDao } from "../../dao/_index.dao";
import { Result, validationResult  } from "express-validator/check";

export function createNewAuthor(req: Request, res: Response): Response | Bluebird<any> {
  const errors: Result = validationResult (req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  return AuthorsDao.createAuthor(req.body)
    .then(author =>
      res
        .status(200)
        .send({ author: author, message: "Author created successfully" })
    )
    .catch(err => console.log(err));
}
