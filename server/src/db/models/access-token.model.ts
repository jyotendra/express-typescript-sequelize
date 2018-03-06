import {Table, Column, Model, HasMany, BelongsTo, CreatedAt, UpdatedAt, DataType} from "sequelize-typescript";
import User from "./user.model";


@Table
export default class AcccessToken extends Model<AcccessToken> {

  @Column
  accessToken: string;

  @BelongsTo(() => User)
  userId: User;

  @Column
  deviceId: string;

  @Column
  isActive: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

}

