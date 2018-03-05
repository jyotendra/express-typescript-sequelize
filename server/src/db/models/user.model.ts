import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DataType} from "sequelize-typescript";


export interface IUserRequestModel {
  email: string;
  password: string;
}

@Table
export default class User extends Model<User> {

  @Column
  email: string;

  @Column
  passwordHash: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}


