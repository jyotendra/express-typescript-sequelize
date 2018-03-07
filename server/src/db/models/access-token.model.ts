import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey
} from "sequelize-typescript";
import User from "./user.model";

@Table
export default class AcccessToken extends Model<AcccessToken> {
  @Column accessToken: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column deviceId: string;

  @Column isActive: boolean;

  @CreatedAt createdAt: Date;

  @UpdatedAt updatedAt: Date;
}
