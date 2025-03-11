const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Pathologie extends Model {}

Pathologie.init(
    {
    ID_Pathologie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nom_pathologie: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    description_pathologie: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: "Pathologie",
    tableName: 'pathologie',
    timestamps: false
});

module.exports = Pathologie;
