'use strict';
var Promise = require("bluebird");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AccessToken",{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      accessToken: {
        type: Sequelize.STRING,
        allowNull: false
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },

      deviceId: {
        type: Sequelize.STRING,
      },

      isActive: {
        type: Sequelize.BOOLEAN
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
