import { Request, Response } from "express";
import { AuthorsDao } from "../../dao/_index";
import * as Bluebird from "bluebird";
import { IAuthorInstance } from "db/models/authors";

export function getAuthors(req: Request, res: Response): Bluebird<any> {
  return AuthorsDao.findAll()
    .then(authors => res.status(200).send(authors))
    .catch(err => console.log(err));
}
