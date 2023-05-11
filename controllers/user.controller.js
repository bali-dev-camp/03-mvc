const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserController {
  static async listPage(req, res) {
    res.render("pages/user/list");
  }

  static async createPage(req, res) {
    res.render("pages/user/add");
  }

  static async store(req, res) {
    res.redirect("/user");
  }

  static async editPage(req, res) {
    res.render("pages/user/edit");
  }

  static async update(req, res) {
    res.redirect("/user");
  }

  static async delete(req, res) {
    res.redirect("/user");
  }
}

module.exports = UserController;
