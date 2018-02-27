import Author from "../db/models/author.model";
import * as Bluebird from "bluebird";
import { IFindOptions } from "sequelize-typescript";


export function getAllAuthors(): Bluebird<Author[]> {
    return Author.findAll<Author>();
}

export function createAuthor(model: any): Bluebird<Author> {
    try {
        const author: Author = Author.build(model);
        return author.save();
    } catch(ex) {
        console.log("Error occurred while saving authors");
    }
}