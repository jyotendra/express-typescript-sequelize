module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Author", 'Address', {
          type: Sequelize.STRING,
          allowNull: true
        });
    }
  };
  