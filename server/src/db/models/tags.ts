import * as Sequelize from 'sequelize';

export interface TagAttributes {
    Id?: string;
    Title?: string;
}

export interface TagInstance {
    Id: string;
    Title: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export default function defineTags(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) {
    const Tag = sequelize.define('Tag', {
        Id: dataTypes.UUIDV4,
        Title: dataTypes.STRING
    });

    return Tag;
}