'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name:'Technology',
      },
      {
        name:'Science',
      },
      {
        name:'Art',
      },
      {
        name:'Music',
      },
      {
        name:'Sports',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('categories', {},null);
  }
};
