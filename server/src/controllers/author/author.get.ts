import { Request, Response } from "express";
import * as Bluebird from "bluebird";
import { AuthorsDao } from "../../dao/_index.dao";

export function getAuthors(req: Request, res: Response): Bluebird<any> {
  return AuthorsDao.findAll()
    .then(authors => res.status(200).send(authors))
    .catch(err => console.log(err));
}
