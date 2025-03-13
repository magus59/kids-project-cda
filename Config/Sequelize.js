const { Sequelize } = require("sequelize");
require("dotenv").config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
      charset: "utf8mb4",
    },
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
    },
    logging: process.env.NODE_ENV === "development" ? console.log : false, 
    retry: {
      max: 5, 
    },
  }
);

sequelize.authenticate()
  .then(() => console.log("Connexion réussie à la base de données"))
  .catch(err => console.error("Erreur de connexion à la base de données :", err));

module.exports = sequelize;
