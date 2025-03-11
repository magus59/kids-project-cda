const SymptomeService = require('../Services/SymptomeService');

class SymptomeController {

    async getAllSymptome(request, response){
        try {
            const symptomes = await SymptomeService.getAllSymptome();
            response.json(symptomes);
        } catch (error) {
            console.log(error);
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération des symptomes"})
        }
    }

    async getSymptomeById(request, response){
        try {
            const symptome = await SymptomeService.getSymptomeById(request.params.id);
            response.json(symptome);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération du symptome"})
        }
    }

    async addSymptome(request, response){
        try {
            const symptome = await SymptomeService.addSymptome(request.body);
            response.json(symptome);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de l'ajout du symptome"})
        }
    }
    
    async updateSymptome(request, response){
        try {
            const symptome = await SymptomeService.updateSymptome(request.params.id, request.body);
            response.json(symptome);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la modification du symptome"})
        }
    }

    async deleteSymptome(request, response){
        try {
            const symptome = await SymptomeService.deleteSymptome(request.params.id);
            response.json(symptome);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la suppression du symptome"})
        }
    }

}

module.exports = new SymptomeController();