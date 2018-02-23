import * as Sequelize from 'sequelize';

export interface BookAttributes {
    Id?: string;
    Title?: string;
}

export interface BookInstance extends Sequelize.Instance<BookAttributes> {
    Id: string;
    Title: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export  function defineBooks(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) {
    const Book = sequelize.define('Book', {
        Id: dataTypes.UUIDV4,
        Title: dataTypes.STRING
    });


    return Book;
}



