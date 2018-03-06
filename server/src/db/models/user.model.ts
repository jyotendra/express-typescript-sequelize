import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DataType} from "sequelize-typescript";
import AccessToken from "./access-token.model";

@Table
export default class User extends Model<User> {

  @Column
  email: string;

  @Column
  passwordHash: string;

  @HasMany(() => AccessToken)
  tokens: AccessToken[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}


export interface IUserCreateRequestModel {
  email: string;
  password: string;
}

export interface ISigninUSerModel {
  email: string;
  password: string;
}