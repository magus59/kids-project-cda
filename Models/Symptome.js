const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Symptome extends Model {}

Symptome.init(
    {
        ID_Symptome: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nom_symptome: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Symptome",
        tableName: 'symptome',
        timestamps: false
    }
);

module.exports = Symptome;
