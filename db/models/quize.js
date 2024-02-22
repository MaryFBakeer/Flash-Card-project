const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quize extends Model {

    static associate({QuizeTheme}) {
      this.belongsTo(QuizeTheme, { foreignKey: 'themeId' });

    }
  }
  Quize.init({
    themeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {

        model: 'QuizeThemes',

        key: 'id',

      },

      onDelete: 'Cascade',

    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answers: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Quize',
  });
  return Quize;
};
