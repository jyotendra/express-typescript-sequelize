import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export default class Author extends Model<Author> {

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}


