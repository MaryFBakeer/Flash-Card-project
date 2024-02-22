/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quizes', [
      {
        themeId: 1,
        question: 'BMW or Mercedes?',
        answers: 'BMW',
        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        themeId: 1,
        question: 'Hummer or Lada',
        answers: 'Lada',
        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question: 'Football or hockey',
        answers: 'Hockey',
        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        themeId: 2,
        question: 'Basketball or volleybal',
        answers: 'Basketball',
        createdAt: new Date(),

        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quizes', null, {});
  },
};
