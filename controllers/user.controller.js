const { generateHash } = require("../lib/bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserController {
  static async listPage(req, res) {
    const result = await prisma.user.findMany();
    res.render("pages/user/list", { users: result });
  }

  static async createPage(req, res) {
    res.render("pages/user/add");
  }

  static async store(req, res) {
    const encryptedPassword = generateHash(req.body.password);

    await prisma.user.create({
      data: {
        username: req.body.username,
        password: encryptedPassword,
      },
    });

    res.redirect("/user");
  }

  static async editPage(req, res) {
    const result = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/user/edit", { user: result });
  }

  static async update(req, res) {
    const encryptedPassword = req.body.password
      ? generateHash(req.body.password)
      : undefined;

    await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username: req.body.username,
        password: encryptedPassword,
      },
    });

    res.redirect("/user");
  }

  static async delete(req, res) {
    await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.redirect("/user");
  }
}

module.exports = UserController;
