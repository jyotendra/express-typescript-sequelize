import * as Sequelize from 'sequelize';

export interface AuthorAttributes {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}

export interface AuthorInstance extends Sequelize.Instance<AuthorAttributes> {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export  function defineAuthors(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) {
    const Authors = sequelize.define('Authors', {
        id: dataTypes.UUIDV4,
        firstName: dataTypes.STRING,
        lastName: dataTypes.STRING,
        email: dataTypes.STRING
    });

    return Authors;
}



