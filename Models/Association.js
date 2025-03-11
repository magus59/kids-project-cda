const Pathologie = require("./Pathologie");
const Symptome = require("./Symptome");
const Provoquer = require("./Provoquer");

// Pathologie <-> Symptome
Pathologie.belongsToMany(Symptome, { through: Provoquer, as: 'symptomes', foreignKey: 'ID_Pathologie' });
Symptome.belongsToMany(Pathologie, { through: Provoquer, as: 'pathologies', foreignKey: 'ID_Symptome' });

module.exports = {
    Pathologie,
    Symptome
};
