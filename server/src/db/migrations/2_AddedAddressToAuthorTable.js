module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Authors", 'Address', {
          type: Sequelize.STRING,
          allowNull: true
        });
    }
  };
  