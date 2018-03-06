module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Author", 'address', {
          type: Sequelize.STRING,
          allowNull: true
        });
    }
  };
  