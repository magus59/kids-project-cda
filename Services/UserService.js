const { where } = require("sequelize");
const User = require("../Models/User");

class UserService {
  async getAllUser() {
    return await User.findAll();
  }

  async getUserById(userId) {
    return await User.findByPk(userId);
  }

  async addUser(user) {
    return await User.create(user);
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
}

module.exports = new UserService();
