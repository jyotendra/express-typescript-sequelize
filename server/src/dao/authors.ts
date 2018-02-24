import db from "../db/models/_index";
import { IAuthorInstance } from "../db/models/authors";
import * as Bluebird from "bluebird";

export function create(author: IAuthorInstance): Bluebird<IAuthorInstance> {
    return db.Author.create({
        Id: 1,
        FirstName: "Surya",
        LastName: "Reddy",
        Email: "suryareddy@gmail.com"
    });
}

export function findAll(): Bluebird<IAuthorInstance[]> {
    return db.Author.findAll({ include: [{ all: true }] });
}