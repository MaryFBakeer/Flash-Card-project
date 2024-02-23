/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alex',
        email: 'alex@gmail.com',
        password: '123',
        score: 123,
        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: 'Lena',
        email: 'lena@gmail.com',
        password: '123',
        score: 123,
        createdAt: new Date(),

        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
