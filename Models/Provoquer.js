const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

class Provoquer extends Model {}

Provoquer.init(
  {
    ID_Pathologie: {
      type: DataTypes.INTEGER,
      references: {
        model: "Pathologie",
        key: "ID_Pathologie",
      },
      primaryKey: true,
    },
    ID_Symptome: {
      type: DataTypes.INTEGER,
      references: {
        model: "Symptome",
        key: "ID_Symptome",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "Provoquer",
    tableName: "provoquer",
    timestamps: false,
  }
);

module.exports = Provoquer;
