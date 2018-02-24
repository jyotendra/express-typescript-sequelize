import * as Sequelize from "sequelize";

export interface AuthorAttributes {
  Id?: number;
  FirstName?: string;
  LastName?: string;
  Email: string;
}

export interface AuthorInstance extends Sequelize.Instance<AuthorAttributes> {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export function defineAuthors(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
) {
  const Author = sequelize.define("Author", {
    Id: dataTypes.UUIDV4,
    FirstName: dataTypes.STRING,
    LastName: dataTypes.STRING,
    Email: dataTypes.STRING
  });

  return Author;
}
