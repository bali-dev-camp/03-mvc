const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShoeController {
  static async listPage(req, res) {
    const result = await prisma.shoe.findMany()
    res.render("pages/list", {shoes: result})
  }

  static async detailPage(req, res) {
    const result = await prisma.shoe.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.render("pages/detail", {shoe: result})
  }

  static async createPage(req, res) {
    res.render("pages/add-product")
  }

  static async aboutPage(req, res) {
    res.render("pages/about")
  }
}

module.exports = ShoeController;
