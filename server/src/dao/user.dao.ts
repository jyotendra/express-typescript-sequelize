import User, {
  IUserCreateRequestModel,
  ISigninUSerModel
} from "../db/models/user.model";
import AcccessToken from "../db/models/access-token.model";
import { getHash } from "../utils/bcrypter.util";
import * as Bluebird from "bluebird";

export function createUser(model: IUserCreateRequestModel): Bluebird<User> {
  try {
    const author: User = User.build(model);
    return author.save();
  } catch (ex) {
    console.log("Error occurred while saving authors");
  }
}

export function signinUser(model: ISigninUSerModel): Bluebird<User> {
  try {
    console.log(model.password)
    return getHash(model.password).then((hash: string) => {
      console.log("thats my hash", hash);
      return User.findOne({
        where: { email: model.email, passwordHash: hash }
      });
    });
  } catch (ex) {
    console.log("Error occurred", ex);
  }
}
