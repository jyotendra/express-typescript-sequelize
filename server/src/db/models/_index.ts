import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../../../config/database.json');

import { AuthorInstance, AuthorAttributes } from './authors'
import { BookInstance, BookAttributes } from './books'
import { TagInstance, TagAttributes } from './tags'

interface DbConnection {
  Author: Sequelize.Model<AuthorInstance, AuthorAttributes>,
  Book: Sequelize.Model<BookInstance, BookAttributes>
}

let db: any = {}


// const dbConfig = config[process.env.NODE_ENV]

const dbConfig = config['development'];


const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

const basename = path.basename(module.filename)

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    const model: any = sequelize['import'](path.join(__dirname, file))
    db[model['name']] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize

export default <DbConnection>db


