import User, { IUserRequestModel } from "../db/models/user.model";
import * as Bluebird from "bluebird";

export function createUser(model: IUserRequestModel): Bluebird<User> {
    try {
        const author: User = User.build(model);
        return author.save();
    } catch(ex) {
        console.log("Error occurred while saving authors");
    }
}