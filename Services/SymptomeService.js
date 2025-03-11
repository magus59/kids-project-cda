const { where } = require("sequelize");
const Symptome = require("../Models/Symptome");
const Pathologie = require("../Models/Pathologie");

class SymptomeService {
  async getAllSymptome() {
    return await Symptome.findAll({ include: [
      {
        model: Pathologie,
        as: "pathologies",
      },
    ],});
  }

  async getSymptomeById(symptomeId) {
    return await Symptome.findByPk(symptomeId, { include: [
      {
        model: Pathologie,
        as: "pathologies",
      },
    ],});
  }

  async addSymptome(symptome) {
    return await Symptome.create(symptome);
  }

  async updateSymptome(id, symptome) {
    return await Symptome.update(symptome, {
      where: {
        ID_Symptome: id,
      },
    });
  }

  async deleteSymptome(id) {
    return await Symptome.destroy({
      where: {
        ID_Symptome: id,
      },
    });
  }
}

module.exports = new SymptomeService();
