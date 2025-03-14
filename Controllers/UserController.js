const UserService = require("../Services/UserService");
const userSchema = require("../validations/UserValidation");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

class UserController {
    async getAllUser(request, response) {
        try {
            const users = await UserService.getAllUser();
            return response.json(users);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
        }
    }

    async getUserById(request, response) {
        try {
            const user = await UserService.getUserById(request.params.id);
            if (!user) {
                return response.status(404).json({ error: "Utilisateur non trouvé" });
            }
            return response.json(user);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
        }
    }

    async addUser(request, response) {
        try {
            const validatedData = userSchema.parse(request.body);

            validatedData.password = await bcrypt.hash(validatedData.password, 10);

            const user = await UserService.addUser(validatedData);
            return response.status(201).json(user);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ errors: error.errors });
            }
            console.error(error);
            return response.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur" });
        }
    }

    async updateUser(request, response) {
        try {
            const existingUser = await UserService.getUserById(request.params.id);
            if (!existingUser) {
                return response.status(404).json({ error: "Utilisateur non trouvé" });
            }

            const validatedData = userSchema.partial().parse(request.body);

            if (validatedData.password) {
                validatedData.password = await bcrypt.hash(validatedData.password, 10);
            }

            const updatedUser = await UserService.updateUser(request.params.id, validatedData);
            return response.json(updatedUser);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ errors: error.errors });
            }
            console.error(error);
            return response.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
        }
    }

    async deleteUser(request, response) {
        try {
            const existingUser = await UserService.getUserById(request.params.id);
            if (!existingUser) {
                return response.status(404).json({ error: "Utilisateur non trouvé" });
            }

            await UserService.deleteUser(request.params.id);
            return response.json({ message: "Utilisateur supprimé avec succès" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
        }
    }

    async login(request, response) {
        try {
            const { email, password } = request.body;

            const user = await UserService.authenticateUser(email, password);

            if (!user) {
                return response.status(404).json({ error: "Utilisateur non trouvé" });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return response.status(400).json({ error: "Mot de passe incorrect" });
            }

            const payload = {
                id: user.ID_Utilisateur,
                pseudo: user.pseudo,
                role: user.role,
            };

            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); 

            return response.json({ user, token });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erreur lors de la connexion" });
        }
    }
}

module.exports = new UserController();
