const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

class Consulter extends Model {}

Consulter.init(
  {
    ID_Pathologie: {
      type: DataTypes.INTEGER,
      references: {
        model: "Pathologie",
        key: "ID_Pathologie",
      },
      primaryKey: true,
    },
    ID_Utilisateur: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "ID_Utilisateur",
        },
        primaryKey: true,
      },
  },
  {
    sequelize,
    modelName: "Consulter",
    tableName: "consulter",
    timestamps: false,
  }
);

module.exports = Consulter;
