const PathologieService = require('../Services/PathologieService');

class PathologieController {

    async getAllPathologie(request, response){
        try {
            const pathologies = await PathologieService.getAllPathologie();
            response.json(pathologies);
        } catch (error) {
            console.log(error);
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération des pathologies"})
        }
    }

    async getPathologieById(request, response){
        try {
            const pathologie = await PathologieService.getPathologieById(request.params.id);
            response.json(pathologie);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération du Pathologie"})
        }
    }

    async addPathologie(request, response){
        try {
            const pathologie = await PathologieService.addPathologie(request.body);
            response.json(pathologie);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de l'ajout du Pathologie"})
        }
    }
    
    async updatePathologie(request, response){
        try {
            const pathologie = await PathologieService.updatePathologie(request.params.id, request.body);
            response.json(pathologie);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la modification de la Pathologie"})
        }
    }

    async deletePathologie(request, response){
        try {
            const pathologie = await PathologieService.deletePathologie(request.params.id);
            response.json(pathologie);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la suppression de la Pathologie"})
        }
    }

}

module.exports = new PathologieController();