import * as Sequelize from "sequelize";
import { IModelCreator } from "../entities/model-creator.interface";
import { injectable } from "inversify";

@injectable()
export class ModelCreator<TInstance, TAttributes> implements IModelCreator<TInstance, TAttributes> {

    sequelize: Sequelize.Sequelize;

    dataTypes:  Sequelize.DataTypes;

    constructor(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) {
        this.sequelize = sequelize;
        this.dataTypes = dataTypes;
    }

    define (modelName: string, modelObject: any): Sequelize.Model<TAttributes, TInstance> {
        const sqlzModel: Sequelize.Model<TAttributes, TInstance>
             = this.sequelize.define(modelName, modelObject);
        return sqlzModel;
    }
}

// interface IAc {
//     de: string;
// }

// let a = new BaseModel<IAc, IAc>(Sequelize, datatypes);

