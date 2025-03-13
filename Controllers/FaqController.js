const FaqService = require('../Services/FaqService');

class FaqController {

    async getAllFaq(request, response){
        try {
            const faqs = await FaqService.getAllFaq();
            response.json(faqs);
        } catch (error) {
            console.log(error);
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération des Faqs"})
        }
    }

    async getFaqById(request, response){
        try {
            const faq = await FaqService.getFaqById(request.params.id);
            response.json(faq);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération du Faq"})
        }
    }

    async addFaq(request, response){
        try {
            const faq = await FaqService.addFaq(request.body);
            response.json(faq);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de l'ajout du Faq"})
        }
    }
    
    async updateFaq(request, response){
        try {
            const faq = await FaqService.updateFaq(request.params.id, request.body);
            response.json(faq);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la modification du Faq"})
        }
    }

    async deleteFaq(request, response){
        try {
            const faq = await FaqService.deleteFaq(request.params.id);
            response.json(faq);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la suppression du Faq"})
        }
    }

}

module.exports = new FaqController();