const Pathologie = require("./Pathologie");
const Symptome = require("./Symptome");
const Provoquer = require("./Provoquer");
const User = require("./User");
const Faq = require("./Faq");
const Consulter = require("./Consulter");
const Lire = require("./Lire");

// Pathologie <-> Symptome 
Pathologie.belongsToMany(Symptome, { 
  through: Provoquer, 
  as: 'symptomes', 
  foreignKey: 'ID_Pathologie' 
});
Symptome.belongsToMany(Pathologie, { 
  through: Provoquer, 
  as: 'pathologies', 
  foreignKey: 'ID_Symptome' 
});

// Pathologie <-> User 
Pathologie.belongsToMany(User, {
  through: Consulter,
  as: 'Users',
  foreignKey: 'ID_Pathologie'
});
User.belongsToMany(Pathologie, {
  through: Consulter,
  as: 'pathologies',
  foreignKey: 'ID_User'
});

// User <-> Faq
User.belongsToMany(Faq, {
  through: Lire,
  as: 'faqs',
  foreignKey: 'ID_User'
});
Faq.belongsToMany(User, {
  through: Lire,
  as: 'Users',
  foreignKey: 'ID_faq'
});

module.exports = {
  Pathologie,
  Symptome,
  Provoquer,
  User,
  Faq,
  Consulter,
  Lire
};
