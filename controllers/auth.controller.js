const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AuthController {
  static async loginPage(req, res) {
    res.render("pages/login");
  }

  static async login(req, res) {
    res.redirect("/");
  }

  static async logout(req, res) {
    res.redirect("/login");
  }
}

module.exports = AuthController;
