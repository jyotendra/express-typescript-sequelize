import * as fs from "fs";
import * as path from "path";
import * as Sequelize from "sequelize";

const config: any = require("../../../config/database.json");

import { IAuthorInstance, IAuthorAttributes } from "./author.model";
import { IBookInstance, IBookAttributes } from "./book.model";
import { ITagInstance, ITagAttributes } from "./tag.model";

export const MODEL_NAMES: Array<string> = [];

interface IDbConnection {
  Author: Sequelize.Model<IAuthorInstance, IAuthorAttributes>;
  Book: Sequelize.Model<IBookInstance, IBookAttributes>;
}

let db: any = {};


// const dbConfig = config[process.env.NODE_ENV]

const dbConfig: any = config.development;


const sequelize: Sequelize.Sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const basename: string = path.basename(module.filename);

fs
  .readdirSync(__dirname)
  .filter(function(file: string): boolean {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file: string): void {
    const model: any = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName: string): void {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



export default <IDbConnection>db;


