const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShoeController {
  static async getShoePage(req, res) {
    const result = await prisma.shoe.findMany({});
    res.render("pages/index", { shoes: result });
  }

  static async addShoePage(req, res) {
    res.render("pages/add");
  }

  static async detailShoePage(req, res) {
    res.render("pages/detail");
  }

  static async editShoePage(req, res) {
    res.render("pages/edit");
  }

  static async aboutShoePage(req, res) {
    res.render("pages/about");
  }
}

module.exports = ShoeController;
