import User, {
  IUserCreateRequestModel,
  ISigninUSerModel
} from "../db/models/user.model";
import AcccessToken from "../db/models/access-token.model";
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
    return User.findOne({ where: { email: model.email } });
  } catch (ex) {
    console.log("Error occurred", ex);
  }
}


