import * as Sequelize from "sequelize";

interface ITInstance {}
interface ITAttributes {}

export class TInstance implements ITInstance {}
export class TAttributes implements ITAttributes {}

export interface IModelCreator<TInstance, TAttributes> {
    define (modelName: string, modelObject: any): Sequelize.Model<TAttributes, TInstance>;
}