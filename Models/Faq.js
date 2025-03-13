const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Faq extends Model {}

Faq.init(
    {
        ID_Faq: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        reponse: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        modelName: "Faq",
        tableName: 'faq',
        timestamps: false
    }
);

module.exports = Faq;
