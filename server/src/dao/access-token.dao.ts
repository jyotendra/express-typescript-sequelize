import AcccessToken, {
  IUpdateAccessTokenModel
} from "../db/models/access-token.model";
import * as Bluebird from "bluebird";
import { Op } from "sequelize";

export function saveToken(
  model: IUpdateAccessTokenModel
): Bluebird<AcccessToken> {
  try {
    return AcccessToken.findAll({
      where: {
        userId: {
          [Op.eq]: model.userId
        }
      }
    }).then(foundToken => {
      if (foundToken) {
        return AcccessToken.destroy({
          where: {
            userId: {
              [Op.eq]: model.userId
            }
          }
        })
      } else {
          return Bluebird.resolve(0);
      }
    }).then(() => {
        const token: AcccessToken = AcccessToken.build(model);
        return token.save();
    })

  } catch (ex) {
    console.log("Error occurred while saving authors");
  }
}
