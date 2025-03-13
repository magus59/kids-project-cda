const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  }
);

sequelize.authenticate()
  .then(() => console.log("Connexion réussie à la base de données"))
  .catch(err => console.error("Erreur de connexion à la base de données :", err));

module.exports = sequelize;
