const Pathologie = require("../Models/Pathologie");
const Symptome = require("../Models/Symptome");

class PathologieService {
  async getAllPathologie() {
    return await Pathologie.findAll({
      include: [
        {
          model: Symptome,
          as: "symptomes",
        }
      ],
    });
  }

  async getPathologieById(pathologieId) {
    return await Pathologie.findByPk(pathologieId, {
      include: [
        {
          model: Symptome,
          as: "symptomes",
        }
      ],
    });
  }
  async addPathologie(pathologie) {
    try {
      if (!pathologie.nom_pathologie || !pathologie.ID_Service) {
        throw new Error("Données manquantes pour la création de la pathologie.");
      }
      return await Pathologie.create(pathologie);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la pathologie:", error.message);
      throw error;
    }
  }
  async updatePathologie(id, pathologie) {
    try {
      const [affectedRows] = await Pathologie.update(pathologie, {
        where: {
          ID_Pathologie: id,
        },
      });
  
      if (affectedRows === 0) {
        throw new Error("Aucune pathologie trouvée avec cet ID.");
      }
  
      return affectedRows;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la pathologie:", error.message);
      throw error;
    }
  }
  async deletePathologie(id) {
    try {
      const deletedRows = await Pathologie.destroy({
        where: {
          ID_Pathologie: id,
        },
      });
  
      if (deletedRows === 0) {
        throw new Error("Aucune pathologie trouvée avec cet ID.");
      }
  
      return deletedRows;
    } catch (error) {
      console.error("Erreur lors de la suppression de la pathologie:", error.message);
      throw error;
    }
  }
      
}

module.exports = new PathologieService();
