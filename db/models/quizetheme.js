const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class QuizeTheme extends Model {
    static associate({ Quize }) {
      this.hasMany(Quize, { foreignKey: 'themeId' });
    }
  }
  QuizeTheme.init({
    themeName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'QuizeTheme',
  });
  return QuizeTheme;
};
