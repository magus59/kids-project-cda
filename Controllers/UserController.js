const UserService = require('../Services/UserService');

class UserController {

    async getAllUser(request, response){
        try {
            const users = await UserService.getAllUser();
            response.json(users);
        } catch (error) {
            console.log(error);
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération des symptomes"})
        }
    }

    async getUserById(request, response){
        try {
            const user = await UserService.getUserById(request.params.id);
            response.json(user);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération du User"})
        }
    }

    async addUser(request, response){
        try {
            const user = await UserService.addUser(request.body);
            response.json(user);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de l'ajout du User"})
        }
    }
    
    async updateUser(request, response){
        try {
            const user = await UserService.updateUser(request.params.id, request.body);
            response.json(user);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la modification du User"})
        }
    }

    async deleteUser(request, response){
        try {
            const user = await UserService.deleteUser(request.params.id);
            response.json(user);
        } catch (error) {
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la suppression du User"})
        }
    }

}

module.exports = new UserController();