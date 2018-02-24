module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Authors", 'address', {
          type: Sequelize.STRING,
          allowNull: true
        });
    }
  };
  