import * as fs from "fs";
import * as path from "path";
import {Sequelize} from "sequelize-typescript";
import Author from "./author.model";

const config: any = require("../../../config/database.json");

const dbConfig: any = config.development;

export const sequelize: Sequelize = new Sequelize({
  ...dbConfig,
});
sequelize.addModels([Author]);

