import { Request, Response } from "express";
import { AuthorsDao } from "@doa/_index";

export function getAuthors(req: Request, res: Response) {
  return AuthorsDao.findAll()
    .then(authors => res.status(200).send(authors))
    .catch(err => console.log(err));
}
