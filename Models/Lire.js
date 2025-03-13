const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

class Lire extends Model {}

Lire.init(
  {
    ID_Utilisateur: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "ID_Utilisateur",
      },
      primaryKey: true,
    },
    ID_faq: {
      type: DataTypes.INTEGER,
      references: {
        model: "Faq",
        key: "ID_faq",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "Lire",
    tableName: "lire",
    timestamps: false,
  }
);

module.exports = Lire;