import * as Sequelize from "sequelize";

export interface ITagAttributes {
  id?: string;
  Title?: string;
}

export interface ITagInstance {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function defineTags(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<ITagInstance, ITagAttributes> {
  const Tag: Sequelize.Model<ITagInstance, ITagAttributes> = sequelize.define(
    "Tag",
    {
      title: dataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );

  return Tag;
}
