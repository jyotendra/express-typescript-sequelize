'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const todaysDate = new Date();
    return queryInterface.bulkInsert('Author', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@abc.com',
      createdAt: todaysDate.toUTCString(),
      updatedAt: todaysDate.toUTCString(),
      address: 'abc street, xyz lane, ABC'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Author', null);
  }
};
