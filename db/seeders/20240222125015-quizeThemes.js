/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'QuizeThemes',
      [
        {
          themeName: 'Звездные войны',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeName: 'Угадай флаг',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuizeThemes', null, {});
  },
};
