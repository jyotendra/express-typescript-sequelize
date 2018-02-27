import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DataType} from "sequelize-typescript";

@Table
export default class Author extends Model<Author> {

  @Column({type: DataType.TEXT})
  firstName: string;

  @Column({type: DataType.TEXT})
  lastName: string;

  @Column({type: DataType.TEXT})
  email: string;

  @Column({type: DataType.DATE})
  createdAt: Date;

  @Column({type: DataType.DATE})
  updatedAt: Date;
}


