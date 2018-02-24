import * as Sequelize from "sequelize";
import container from "../../inversify/inversify.config";

const MODEL_NAME: string = "Author";

export interface IAuthorAttributes {
  Id?: number;
  FirstName?: string;
  LastName?: string;
  Email: string;
}

export interface IAuthorInstance extends Sequelize.Instance<IAuthorAttributes> {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export default function defineAuthors(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<IAuthorInstance, IAuthorAttributes>  {
  const Author: Sequelize.Model<IAuthorInstance, IAuthorAttributes> = sequelize.define("Author", {
    Id: dataTypes.UUIDV4,
    FirstName: dataTypes.STRING,
    LastName: dataTypes.STRING,
    Email: dataTypes.STRING
  });

  return Author;
}
