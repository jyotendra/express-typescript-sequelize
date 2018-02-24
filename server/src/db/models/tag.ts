import * as Sequelize from "sequelize";

export interface ITagAttributes {
  Id?: string;
  Title?: string;
}

export interface ITagInstance {
  Id: string;
  Title: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export default function defineTags(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<ITagInstance, ITagAttributes> {
  const Tag: Sequelize.Model<ITagInstance, ITagAttributes> = sequelize.define(
    "Tag",
    {
      Id: dataTypes.UUIDV4,
      Title: dataTypes.STRING
    }
  );

  return Tag;
}
