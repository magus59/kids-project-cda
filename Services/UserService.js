const jwt = require('jsonwebtoken');
const User = require("../Models/User");
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET; 

class UserService {
  async getAllUser() {
    return await User.findAll();
  }

  async getUserById(userId) {
    return await User.findByPk(userId);
  }

  async addUser(user) {
    const createdUser = await User.create(user);
    
    const payload = {
      id: createdUser.ID_Utilisateur,
      pseudo: createdUser.pseudo,
      role: createdUser.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); 

    return { user: createdUser, token };
  }

  async updateUser(id, user) {
    return await User.update(user, {
      where: {
        ID_Utilisateur: id,
      },
    });
  }

  async deleteUser(id) {
    return await User.destroy({
      where: {
        ID_Utilisateur: id,
      },
    });
  }

  async authenticateUser(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("Aucun utilisateur trouvé pour cet email:", email);
      return null; 
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Mot de passe incorrect pour l'utilisateur:", email);
      return null;
    }

    return user;
  }

}

module.exports = new UserService();
