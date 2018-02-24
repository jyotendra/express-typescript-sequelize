import * as Sequelize from "sequelize";

export interface IBookAttributes {
  Id?: string;
  Title?: string;
}

export interface IBookInstance extends Sequelize.Instance<IBookAttributes> {
  Id: string;
  Title: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export default function defineBooks(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<IBookInstance, IBookAttributes> {
  const Book: Sequelize.Model<IBookInstance, IBookAttributes> = sequelize.define("Book", {
    Id: dataTypes.UUIDV4,
    Title: dataTypes.STRING
  });

  return Book;
}
