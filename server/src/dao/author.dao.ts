import Author from "../db/models/author.model";
import * as Bluebird from "bluebird";
import { IFindOptions } from "sequelize-typescript";

// export function create(author: IAuthorInstance): Bluebird<IAuthorInstance> {
//     return db.Author.create({
//         firstName: "Surya",
//         lastName: "Reddy",
//         email: "suryareddy@gmail.com"
//     });
// }

export function findAll(): Bluebird<Author[]> {
    return Author.findAll<Author>();
}