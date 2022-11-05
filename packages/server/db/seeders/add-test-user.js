'use strict';

const addUsers = [
  {
    firstName: 'Test1',
    lastName: 'Testovich1',
    gender: 'male',
    pictureName: '1.jpg',
    phone: '+380681234567',
    email: 'test1@gmail.com',
    country: 'Gdetotam',
    state: 'Imennotam',
    dateOfBirth: '1980-11-03T17:53:57.660Z',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Test2',
    lastName: 'Testovich2',
    gender: 'male',
    pictureName: '17.jpg',
    phone: '+380981234567',
    email: 'test2@gmail.com',
    country: 'Gdetotam',
    state: 'Imennotam',
    dateOfBirth: '1980-11-03T17:53:57.660Z',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Test3',
    lastName: 'Testovich3',
    gender: 'female',
    pictureName: '32.jpg',
    phone: '+380501234567',
    email: 'test3@gmail.com',
    country: 'Gdetotam',
    state: 'Imennotam',
    dateOfBirth: '1980-11-03T17:53:57.660Z',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', addUsers, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
