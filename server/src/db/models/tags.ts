import * as Sequelize from 'sequelize';

export interface TagsAttributes {
    id?: string;
    title?: string;
}

export interface TagInstance {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
}

export default function defineTags(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) {
    const Tags = sequelize.define('Tags', {
        id: dataTypes.UUIDV4,
        title: dataTypes.STRING
    });

    return Tags;
}