import User, {
  IUserCreateRequestModel,
  ISigninUSerModel
} from "../db/models/user.model";
import AcccessToken from "../db/models/access-token.model";
import { getHash, compareHash } from "../utils/bcrypter.util";
import * as Bluebird from "bluebird";

export function createUser(model: IUserCreateRequestModel): Bluebird<User> {
  try {
    const author: User = User.build(model);
    return author.save();
  } catch (ex) {
    console.log("Error occurred while saving authors");
  }
}

export function signinUser(
  model: ISigninUSerModel
): Bluebird<any> {
      // console.log(model.password);
      return User.findOne({ where: { email: model.email } }).then(user => {
        if (!user) {
          return Bluebird.resolve();
        } else {
          return compareHash(model.password, user.passwordHash).then(val => {
            return new Bluebird((resolve, reject) => {
              if (val) {
                resolve(user);
              } else {
                reject(null);
              }
            });
          });
        }
      });
}
