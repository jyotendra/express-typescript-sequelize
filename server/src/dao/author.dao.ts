import db from "../db/models/_index.model";
import { IAuthorInstance } from "../db/models/author.model";
import * as Bluebird from "bluebird";

export function create(author: IAuthorInstance): Bluebird<IAuthorInstance> {
    return db.Author.create({
        firstName: "Surya",
        lastName: "Reddy",
        email: "suryareddy@gmail.com"
    });
}

export function findAll(): Bluebird<IAuthorInstance[]> {
    return db.Author.findAll({ include: [{ all: true }] });
}