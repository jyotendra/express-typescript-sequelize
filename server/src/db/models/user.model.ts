import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DataType, PrimaryKey} from "sequelize-typescript";
import AccessToken from "./access-token.model";

@Table
export default class User extends Model<User> {

  @PrimaryKey
  @Column
  id: number;

  @Column
  email: string;

  @Column
  passwordHash: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // Relations are defined below
  @HasMany(() => AccessToken)
  tokens: AccessToken[];
}


export interface IUserCreateRequestModel {
  email: string;
  password: string;
}

export interface ISigninUSerModel {
  email: string;
  password: string;
}