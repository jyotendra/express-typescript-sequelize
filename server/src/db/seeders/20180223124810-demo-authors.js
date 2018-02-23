'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const todaysDate = new Date();
    return queryInterface.bulkInsert('Author', [{
      FirstName: 'John',
      LastName: 'Doe',
      Email: 'johndoe@abc.com',
      CreatedAt: todaysDate.toUTCString(),
      UpdatedAt: todaysDate.toUTCString(),
      Address: 'abc street, xyz lane, ABC'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null);
  }
};
