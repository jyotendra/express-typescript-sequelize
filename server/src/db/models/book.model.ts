import * as Sequelize from "sequelize";

export interface IBookAttributes {
  id?: string;
  title?: string;
}

export interface IBookInstance extends Sequelize.Instance<IBookAttributes> {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export default function defineBooks(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<IBookInstance, IBookAttributes> {
  const Book: Sequelize.Model<
    IBookInstance,
    IBookAttributes
  > = sequelize.define(
    "Book",
    {
      title: dataTypes.STRING
    }
  );

  return Book;
}
