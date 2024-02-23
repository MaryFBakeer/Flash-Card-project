/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      themeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'QuizeThemes',

          key: 'id',
        },

        onDelete: 'Cascade',
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      answers: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Quizes');
  },
};
