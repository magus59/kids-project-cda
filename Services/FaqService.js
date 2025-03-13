const { where } = require("sequelize");
const Faq = require("../Models/Faq");

class FaqService {
  async getAllFaq() {
    return await Faq.findAll();
  }

  async getFaqById(faqId) {
    return await Faq.findByPk(faqId);
  }

  async addFaq(faq) {
    return await Faq.create(faq);
  }

  async updateFaq(id, faq) {
    return await Faq.update(faq, {
      where: {
        ID_Faq: id,
      },
    });
  }

  async deleteFaq(id) {
    return await Faq.destroy({
      where: {
        ID_Faq: id,
      },
    });
  }
}

module.exports = new FaqService();
