import * as Sequelize from "sequelize";

// const MODEL_NAME = 'Author';

export interface IAuthorAttributes {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
}

export interface IAuthorInstance extends Sequelize.Instance<IAuthorAttributes> {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default function defineAuthors(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<IAuthorInstance, IAuthorAttributes> {
  const Author: Sequelize.Model<IAuthorInstance,IAuthorAttributes> = sequelize.define("Author", {
    firstName: dataTypes.STRING,
    lastName: dataTypes.STRING,
    email: dataTypes.STRING
  });

  return Author;
}
