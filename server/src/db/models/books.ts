import * as Sequelize from 'sequelize';

export interface BooksAttributes {
    id?: string;
    title?: string;
}

export interface BookInstance extends Sequelize.Instance<BooksAttributes> {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
}

export  function defineBooks(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) {
    const Books = sequelize.define('Books', {
        id: dataTypes.UUIDV4,
        title: dataTypes.STRING
    });


    return Books;
}



