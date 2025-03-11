const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

class User extends Model {}

User.init(
  {
    ID_Utilisateur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "utilisateur", 
    timestamps: false,
  }
);

module.exports = User;
